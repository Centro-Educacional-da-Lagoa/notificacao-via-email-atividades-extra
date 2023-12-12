export function avancarLiceu(
  nomeResponsavel: string,
  nomeAluno: string,
  cursos: string[],
): string {
  return ` <!DOCTYPE html>
  <html lang="pt">
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Seu Título</title>
    <style>
      body {
        height: 100vh;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
  
      .header-div {
        text-align: center;
        margin: 50px 0;
      }
  
      .main-div {
        max-width: 600px;
        margin: 0 auto;
        padding: 0 32px;
      }
  
  
      .footer-div {
        min-height: 220px;
        background: #a71c20;
        margin-top: 23px;
        display: grid;
        grid-template-rows: 1fr 10px;
        align-items: center;
        color: white;
        text-align: center; /* Centraliza o texto no footer */
      }
  
      .logo-and-icons {
        display: grid;
        grid-template-columns: auto;
        padding: 10px;
        gap: 20px;
        justify-content: center;
        margin: 0 auto; /* Centraliza horizontalmente */
      }
  
      .social-icons {
        display: flex;
        justify-content: center;
      }
  
      .social-icons a {
        margin: 0 10px;
      }
  
      .barra-footer {
        height: 100%;
        background-color: #004a80;
        width: 100%;
        
      }
    </style>
  </head>
  
  <body>
    <div class="header-div">
      <a href="https://liceufranco.com.br/" target="_blank">
        <img
          src="https://sjc1.vultrobjects.com/sinergia-cdn/franco%20logo/logo%20franco%20Colorida%20Horizontal.png"
          height="200px"
         
        />
      </a>
    </div>
  
    <div class="main-div">
      <h1 style="color: #004a80; font-size: 20px; font-weight: 700; line-height: 114%;">
        Olá, ${nomeResponsavel}
      </h1>
  
      <p style="color: #565656;">
        Boa notícia!<br /> A inscrição do(s) aluno(a) <span style="font-weight: 800;">${nomeAluno}</span> no(s) curso(s)
        <span style="font-weight: 700;">${
          cursos.length > 1
            ? cursos.slice(0, -1).join(', ') + ' e ' + cursos.slice(-1)
            : cursos[0]
        }</span>, acaba de ser liberada! <br/>Entre no portal e efetue a inscrição.
      </p>
  
      <p style="font-size: 1rem; font-weight: 500; color: #575757;">
        Abraços, <br />Equipe Centro Educacional da Lagoa
      </p>
  
      <a href="#" style="text-decoration: none;">
        <button style="width: 144px; border-radius: 25px; border: solid #004a80 2px; height: 40px; margin-top: 20px; color: #004a80; font-weight: 600;">
          Ir para o portal
        </button>
      </a>
  
      <p style="font-size: 0.7rem; color: #565656; max-width: 422px; margin-top: 30px;">
        Por favor, pedimos que você não responda a este e-mail, pois se trata de uma mensagem automática.
      </p>
    </div>
  
    <div class="footer-div">
      <div class="logo-and-icons">
        <a href="https://centrocultural.liceufranco.com.br/" target="_blank">
          <img
            src="https://sjc1.vultrobjects.com/sinergia-cdn/franco%20logo/logo%20franco%20Colorida%20Vertical%20Branca.png"
            alt=""
            height="150px"
          />
        </a>
        <div class="social-icons">
          <a href="https://www.instagram.com/colegiofrancobrasileiro/" target="_blank">
            <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/InstagramLogo.png" alt="Logo do instagram" height="22px" />
          </a>
          <a href="https://twitter.com/liceufranco" target="_blank">
            <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/TwitterLogo.png" alt="Logo do Twitter" height="22px" />
          </a>
          <a href="https://www.facebook.com/colegiofrancobrasileiro" target="_blank">
            <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/FacebookLogo.png" alt="Logo do Facebook" height="22px" />
          </a>
          <a href="https://pt.linkedin.com/company/col%C3%A9gio-liceu-franco-brasileiro" target="_blank">
            <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/LinkedinLogo.png" alt="Logo do Linkedin" height="22px" />
          </a>
          <a href="https://www.youtube.com/channel/UCquX2i8JG0dK3pFgSz5pF1w" target="_blank">
            <img src="https://sjc1.vultrobjects.com/sinergia-cdn/social/YoutubeLogo.png"   alt="Logo do Youtube" height="22px" />
          </a>
        </div>  
    
      </div>
      <div class="barra-footer"></div>
    </div>
  `
}







