export function listaDeEsperaCel(
  nomeResponsavel: string,
  nomeAluno: string,
  cursos: string[],
): string {
  return `
              <!DOCTYPE html>
              <html lang="pt">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Document</title>
                  <style>
                    footer {
                      min-height: 200px;
                      /* max-width: 600px; */
                      /* margin: auto; */
                      background: #D6141A;
                      margin-top: 23px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    }
                    .espacamento-icones {
                      padding: 10px;
                    }
              
                    .barra-footer {
                      height: 16px;
                      background-color: #004a80;
                      width: 100%;
                    }
              
                    .tabela-principal {
                      /* padding: 0px 32px; */
                      /* margin: auto; */
                      max-width: 600px;
                      /* display: flex; */
                      /* flex-direction: column; */
                    }
              
                    .barra-divisoria {
                      border: rgb(233, 233, 233) 1px solid;
                      margin-top: 35px;
                      max-width: 550px;
                    }
                  </style>
                </head>
                <body style="margin: 0px; font-family: Arial, Helvetica, sans-serif;">
                  <table align="center" class="tabela-principal">
                    <tr>
                      <td align="center">
                        <a href="https://www.cel.com.br/" target="_blank">
                          <img
                            src="https://sjc1.vultrobjects.com/sinergia-cdn/cel%20logo/Logo%20CEL%20Intercultural%20School_Colorido.png"
                            height="100px"
                            style="margin-top: 50px; margin-bottom: 50px"
                          />
                        </a>
                      </td>
                    </tr>
                    
                    <tr>
                      <td>
                        <h1
                          style="
                            color: #004a80;
                            font-size: 20px;
                            font-weight: 700;
                            line-height: 114%;
                            padding: 0px 32px;
                          "
                        >
                          Olá, ${nomeResponsavel}
                        </h1>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="color: #565656; padding: 0px 32px;">
                          Passando para lhe informar, que o aluno ${nomeAluno}, acaba de entrar na fila de espera para o(s) curso(s)
                          <span style="font-weight: 700;"> ${
                            cursos.length > 1
                              ? cursos.slice(0, -1).join(', ') +
                                ' e ' +
                                cursos.slice(-1)
                              : cursos[0]
                          } </span>.
                          Assim que houver alguma mudança no status, você receberá uma notificação.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p
                          style="
                            font-size: 1rem;
                            font-weight: 500;
                            color: #575757;
                            padding: 0px 32px;
                          "
                        >
                        Abraços, <br />Equipe Centro Educacional da Lagoa
                        </p>
                      </td>
                    </tr>
                    <tr align="center">
                      <td>
                        <a href="#" style="text-decoration: none;">
                          <button
                            style="
                              width: 144px;
                              border-radius: 25px;
                              border: solid #004a80 2px;
                              height: 40px;
                              margin-top: 56px;
                              color: #004a80;
                              font-weight: 600;
                            "
                            onMouseOver="this.style.backgroundColor='#004a80', this.style.color='white'"
                            onMouseOut="this.style.backgroundColor='white',this.style.color='#004a80'"
                          >
                            Ir para o portal
                          </button>
                        </a>
                      </td>
                    </tr>
                   
                    <tr>
                      <td align="center">
                        <p
                          style="
                            font-size: 0.7rem;
                            color: #565656;
                            max-width: 422px;
                            padding: 0px 32px;
                            margin-top: 60px;
                          "
                        >
                          Por favor, pedimos que você não responda esse e-mail, pois se trata
                          de uma mensagem automática.
                        </p>
                      </td>
                    </tr>
                  </table>
                  <tr>
                    <td>
                      <footer>
                        <table align="center" style="padding: 30px;">
                          <table align="center" style="margin-bottom: 3px;">
                            <tr>
                              <td>
                                <a href="https://www.cel.com.br/" target="_blank">
                                  <img
                                    src="https://sjc1.vultrobjects.com/sinergia-cdn/cel%20logo/Logo%20CEL%20Intercultural%20School_BRANCA.png"
                                    alt="Logo do Cel"
                                    height="80px"
                                  />
                                </a>
                              </td>
                            </tr>
                          </table>
                          <table align="center" style="margin-bottom: 33px;">
                          <tr>
                          <td class="espacamento-icones">
                            <a
                              href="https://www.instagram.com/cel.rj/"
                              target="_blank"
                              ><img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/InstagramLogo.png" alt="Logo do instagram" height="22px"
                            /></a>
                          </td>
                          <td class="espacamento-icones">
                            <a
                              href="https://www.facebook.com/cel.rj/"
                              target="_blank"
                              ><img
                                src="https://sjc1.vultrobjects.com/sinergia-cdn/social/FacebookLogo.png"
                                alt="Logo do Facebook"
                                height="22px"
                              />
                            </a>
                          </td>
                          <td class="espacamento-icones">
                            <a
                              href="https://www.linkedin.com/company/celrj/"
                              target="_blank"
                              ><img
                                src="https://sjc1.vultrobjects.com/sinergia-cdn/social/LinkedinLogo.png"
                                alt="Logo do Linkedin"
                                height="22px"
                              />
                            </a>
                          </td>
                          <td class="espacamento-icones">
                            <a
                              href="https://www.youtube.com/channel/UCfV-Uwf2Hai7UcM2tDWZI2A"
                              target="_blank"
                              ><img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/YoutubeLogo.png" alt="" height="22px" />
                            </a>
                          </td>
                        </tr>
                          </table>
                          <div class="barra-footer"></div>
                        </table>
                      </footer>
                    </td>
                  </tr>
                </body>
              </html>
              
              `;
}