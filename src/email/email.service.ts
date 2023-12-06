// email.service.ts

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { expirarCel } from './helpers/cel/expiracaoCel';
import { confirmarCel } from './helpers/cel/confirmarCel';
import { avancarCel } from './helpers/cel/avancarCel';
import { expirarLiceu } from './helpers/liceu/expiracaoLiceu';
import { confirmarLiceu } from './helpers/liceu/confirmarLiceu';
import { avancarLiceu } from './helpers/liceu/avancarLiceu';

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    // Configurar o transporter do nodemailer com as suas credenciais do .env
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async enviarEmailConfirmacao(
    destinatarioEmail: string,
    destinatarioNome: string,
    cursosSelecionados: string[],
    escola: string,
  ) {
    const mailOptionsCel = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Confirmação de Inscrição - Centro Educacional da Lagoa',

      html: confirmarCel(destinatarioNome, cursosSelecionados).toString(),
    };

    const mailOptionsLiceu = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Confirmação de Inscrição - Liceu',
      html: confirmarLiceu(destinatarioNome, cursosSelecionados).toString(),
    };

    if (escola == 'cel') {
      return this.transporter.sendMail(mailOptionsCel);
    } else if (escola == 'liceu') {
      return this.transporter.sendMail(mailOptionsLiceu);
    }
  }

  async enviarEmailExpiracao(
    destinatarioEmail: string,
    destinatarioNome: string,
    cursosSelecionados: string[],
    escola: string,
  ) {
    const mailOptionsCel = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Expiração do tempo de inscrição - Centro Educacional da Lagoa',

      html: expirarCel(destinatarioNome, cursosSelecionados).toString(),
    };

    const mailOptionsLiceu = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Expiração do tempo de inscrição  - Liceu Franco Brasileiro',
      html: expirarLiceu(destinatarioNome, cursosSelecionados).toString(),
    };

    if (escola == 'cel') {
      return this.transporter.sendMail(mailOptionsCel);
    } else if (escola == 'liceu') {
      return this.transporter.sendMail(mailOptionsLiceu);
    }
  }

  async enviarEmailAvancoFila(
    destinatarioEmail: string,
    destinatarioNome: string,
    cursosSelecionados: string[],
    escola: string,
  ) {
    const mailOptionsCel = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Avanço na fila de espera - Centro Educacional da Lagoa',
      html: avancarCel(destinatarioNome, cursosSelecionados).toString(),
    };

    const mailOptionsLiceu = {
      from: process.env.EMAIL_USER,
      to: destinatarioEmail,
      subject: 'Avanço na fila de espera - Liceu Franco Brasileiro',
      html: avancarLiceu(destinatarioNome, cursosSelecionados).toString(),
    };

    if (escola == 'cel') {
      return this.transporter.sendMail(mailOptionsCel);
    } else if (escola == 'liceu') {
      return this.transporter.sendMail(mailOptionsLiceu);
    }
  }
}
