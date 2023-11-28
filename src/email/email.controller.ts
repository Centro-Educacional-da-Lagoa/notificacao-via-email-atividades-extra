import { Controller, Get, Body } from '@nestjs/common';
import { EmailService } from './email.service';

interface IBody {
  destinatarioEmail: string;
  destinatarioNome: string;
  cursosSelecionados: string[];
  escola: string;
}

@Controller('notificacao')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('tempo-expirado')
  async enviarEmailExpiracao(@Body() body: IBody) {
    const destinatarioEmail = body.destinatarioEmail;
    const destinatarioNome = body.destinatarioNome;
    const cursosSelecionados = body.cursosSelecionados;
    const escola = body.escola;

    try {
      await this.emailService.enviarEmailExpiracao(
        destinatarioEmail,
        destinatarioNome,
        cursosSelecionados,
        escola,
      );

      return { sendStatus: true, message: 'Email enviado com sucesso' };
    } catch (err) {
      return {
        sendStatus: false,
        error: `O seguinte erro ocorreu ao tentar enviar o email: ${err}`,
      };
    }
  }

  @Get('confirmacao-inscricao')
  async enviarEmailConfirmacao(@Body() body: IBody) {
    const destinatarioEmail = body.destinatarioEmail;
    const destinatarioNome = body.destinatarioNome;
    const cursosSelecionados = body.cursosSelecionados;
    const escola = body.escola;

    try {
      await this.emailService.enviarEmailConfirmacao(
        destinatarioEmail,
        destinatarioNome,
        cursosSelecionados,
        escola,
      );

      return { sendStatus: true, message: 'Email enviado com sucesso' };
    } catch (err) {
      return {
        sendStatus: false,
        error: `O seguinte erro ocorreu ao tentar enviar o email: ${err}`,
      };
    }
  }

  @Get('inscricao-liberada')
  async enviarEmaiAvancoFila(@Body() body: IBody) {
    const destinatarioEmail = body.destinatarioEmail;
    const destinatarioNome = body.destinatarioNome;
    const cursosSelecionados = body.cursosSelecionados;
    const escola = body.escola;
    try {
      await this.emailService.enviarEmailAvancoFila(
        destinatarioEmail,
        destinatarioNome,
        cursosSelecionados,
        escola,
      );

      return { sendStatus: true, message: 'Email enviado com sucesso' };
    } catch (err) {
      return {
        sendStatus: false,
        error: `O seguinte erro ocorreu ao tentar enviar o email: ${err}`,
      };
    }
  }
}
