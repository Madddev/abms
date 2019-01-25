<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MailerController extends AbstractController
{
    /**
     * @Route("/mailer", name="mailer")
     */
    public function index(Request $request, \Swift_Mailer $mailer)
    {

        $emailSender = $request->get('email');
        $name = $request->get('name');
        $telephone = $request->get('phone') ?? 'Non renseigné';
        $adresse = $request->get('adresse') ?? 'Non renseigné';
        $subject = $request->get('subject') ?? 'Prise de contact';
        $contentMessage = $request->get('message');


        $message = (new \Swift_Message($subject))
            ->setFrom($emailSender)
            ->setTo('diop.mamadou-pro@laposte.net') //contact@abmaliservices.com
            ->setBody(
                $this->renderView(
                // templates/emails/registration.html.twig
                    'mailer/template_email.html.twig',
                    array(
                        'name' => $name,
                        'adresse' =>$adresse,
                        'phone' =>$telephone,
                        'message' => $contentMessage
                    )
                ),
                'text/html'
            )
        ;

        $mailer->send($message,$failures);
        if (empty($failures)) {
            $this->addFlash(
                'success',
                'Votre message a bien été envoyé ! Il sera traité dans les plus brefs délais.'
            );

            return $this->render('default/confirmation_contact.html.twig');
        }
        else {
            $this->addFlash(
                'danger',
                'Un problème est survenu et votre message n\'a pas pu être envoyé. Nous vous invitons à réitérer votre demande.'
            );

            return $this->render('default/confirmation_contact.html.twig');

        }
    }


}
