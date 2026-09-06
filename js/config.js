/* ============================================================================
   WEDDING SITE — CONFIGURAÇÃO CENTRAL
   ----------------------------------------------------------------------------
   Todo o conteúdo do site (nomes, datas, textos, fotos, links, cores e
   informações do casamento) está concentrado neste único objeto.

   Para personalizar o site, edite APENAS este arquivo — o layout é gerado
   automaticamente a partir destes dados.
   ============================================================================ */

window.WEDDING_CONFIG = {

  /* ----------------------------------------------------------------------
     CASAIS E HERÓI
     ---------------------------------------------------------------------- */
  couple: {
    /* Monograma / logo exibido no header, preloader e hero */
    logo: 'A & V',
    names: 'Andressa & Vito',
    shortNames: 'Andressa & Vito',

    partner1: {
      name: 'Andressa',
      nickname: 'Andressa',
      age: 29,
      bornDate: '10 de Fevereiro de 1997',
      bornCity: 'São Paulo — SP',
      profession: 'Arquiteta',
      photo: 'img/Andressa.jpg',
      description: 'Cria mundos com linhas, luz e plantas. Tem o coração no interior e os pés no chão. Dança até o fim da festa e ri com os olhos.',
    },

    partner2: {
      name: 'Vito',
      nickname: 'Vito',
      age: 31,
      bornDate: '15 de Março de 1995',
      bornCity: 'São Roque — SP',
      profession: 'Engenheiro',
      photo: 'img/Vito.jpg',
      description: 'Paciente, generoso e detalhista. Faz arroz perfeito, café às 15h e acredita que as pequenas coisas são as que importam.',
    },
  },

  hero: {
    /* Foto grande do casal (parallax) */
    photo: 'img/hero.jpg',
    quoteLine: 'Nosso amor se encontrou em uma noite de outono',
    button: 'Conheça nossa história',
  },

  /* ----------------------------------------------------------------------
     DATA DA CERIMÔNIA
     ---------------------------------------------------------------------- */
  wedding: {
    dateISO: '2026-12-08T17:00:00-03:00',   // usado no countdown e no Google Calendar
    dateDisplay: '08 de Dezembro de 2026',
    dayShort: '08',
    month: 'Dezembro',
    year: '2026',
    timeDisplay: '17h00',
    city: 'São Roque — SP',
    venue: 'Espaço La Forêt',
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 2 — MENSAGEM DO CASAL
     ---------------------------------------------------------------------- */
  message: {
    kicker: 'Uma mensagem para você',
    title: 'Sejam bem-vindos ao nosso grande dia!',
    photo: 'img/Andressa&Vito.jpg',
    photoCaption: 'Andressa & Vito — 2026',
    text: [
      'Criamos este espaço com muito carinho para compartilhar com vocês cada detalhe de um dos momentos mais especiais das nossas vidas: o nosso casamento.',
      'Sonhamos muito com este dia. Ao longo da nossa história, Deus nos permitiu ressignificar caminhos, transformar sonhos e compreender que cada passo nos conduzia até aqui. E agora, com o coração cheio de gratidão, estamos prestes a viver o nosso tão esperado "sim".',
      'Mais do que uma celebração, este dia representa para nós o início de uma nova história: o nascimento da nossa família diante de Deus e das pessoas que amamos. Será um dia marcado por amor, emoção, alegria, conquistas e, acima de tudo, pela certeza de que os planos de Deus são sempre maiores e mais bonitos do que poderíamos imaginar.',
      'E nada faria sentido sem podermos dividir esse momento com pessoas que, de alguma forma, fazem parte da nossa história. Ter vocês ao nosso lado tornará esse dia ainda mais inesquecível.',
      'Preparamos este site para reunir todas as informações importantes sobre o casamento. Pedimos, com carinho, que confirmem a presença pelo menu "Confirme sua Presença", preenchendo os dados solicitados.',
      'Para aqueles que desejarem nos presentear, disponibilizamos também nossa Lista de Casamento, com diferentes opções de presentes e cotas. Sintam-se totalmente à vontade para escolher a forma que preferirem.',
      'Agora começa a nossa contagem regressiva...',
      'Esperamos vocês para celebrar conosco o início do nosso para sempre. 🤍',
    ],
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 3 — SOBRE O CASAL
     ---------------------------------------------------------------------- */
  coupleSection: {
    kicker: 'Quem somos',
    title: 'Sobre o Casal',
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 4 — LINHA DO TEMPO
     ---------------------------------------------------------------------- */
  timeline: {
    kicker: 'Nossa jornada',
    title: 'Linha do Tempo',
    events: [
      {
        icon: 'users',
        date: 'Março de 2018',
        title: 'O dia em que nos conhecemos',
        description: 'Em um jantar entre amigos, no meio de uma risada, nossos olhares se cruzaram. Ali, sem saber, tudo começou.',
      },
      {
        icon: 'heart',
        date: 'Junho de 2018',
        title: 'Nosso primeiro beijo',
        description: 'Sob a luz do entardecer, na sacada de um apartamento pequeno, a música ao fundo silenciou. E o mundo também.',
      },
      {
        icon: 'ring',
        date: 'Agosto de 2018',
        title: 'O pedido de namoro',
        description: 'Um pedido tímido, feito em um parque com café na mão. A resposta foi um "sim" que ainda ecoa.',
      },
      {
        icon: 'home',
        date: 'Janeiro de 2021',
        title: 'Começamos a morar juntos',
        description: 'Duas caixas de mudança, um sofá novo e muito aprendizado. Nosso primeiro lar foi onde confirmamos: juntos é para sempre.',
      },
      {
        icon: 'anel',
        date: 'Setembro de 2025',
        title: 'O pedido de casamento',
        description: 'No mesmo parque onde tudo começou, com pessoas queridas por perto, ele se ajoelhou. Entre lágrimas, ela disse sim.',
      },
      {
        icon: 'sparkles',
        date: 'Dezembro de 2025',
        title: 'O grande SIM',
        description: 'Celebramos o noivado com champagne, bolo e um anel no dedo. O coração transbordava de amor.',
      },
      {
        icon: 'calendar',
        date: '08 de Dezembro de 2026',
        title: 'O nosso grande dia',
        description: 'Dia em que escreveremos mais um capítulo — agora, diante de todos que amamos. Venha celebrar conosco.',
      },
    ],
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 5 — FRASE DO CASAL
     ---------------------------------------------------------------------- */
  quote: {
    text: 'Cada história de amor é linda, mas a nossa é a minha favorita.',
    author: '— Andressa & Vito',
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 6 — GALERIA (Masonry)
     ---------------------------------------------------------------------- */
  gallery: {
    kicker: 'Memórias',
    title: 'Galeria',
    images: [
      'img/GALERIA01.jpg',
      'img/GALERIA02.jpg',
      'img/GALERIA03.jpg',
      'img/GALERIA04.jpg',
      'img/GALERIA05.jpg',
      'img/GALERIA06.jpg',
    ],
    alt: 'Foto do casamento de Andressa e Vito',
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 7 — MÚSICA DO CASAL
     ---------------------------------------------------------------------- */
  music: {
    kicker: 'Trilha sonora',
    title: 'A Música do Casal',
    trackTitle: 'Valsa dos Nossos Corações',
    trackArtist: 'Playlist de Andressa & Vito',
    /* Defina uma URL de áudio (mp3) para habilitar o player demonstração */
    audioSrc: 'Ed Sheeran - Perfect.mp3',
    spotifyUrl: 'https://open.spotify.com/intl-pt/track/0tgVpDi06FyKpA1z0VMD4v',
    text: 'Cada música que tocamos juntos guarda um pedaço da nossa memória. Deixe-se levar pela nossa trilha sonora — e quem sabe você não encontra uma dança aqui?',
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 8 — PALETA DO CASAMENTO
     ---------------------------------------------------------------------- */
  palette: {
    kicker: 'Cores',
    title: 'Paleta do Casamento',
    note: 'Nossa paleta é suave e terrosa. Escolha um tom que combine com você e brilhe com a gente.',
    groups: [
      {
        label: 'Noivos',
        description: 'As cores que usaremos no grande dia.',
        colors: [
          { name: 'Vestido da Noiva', hex: '#F1E7D8' },
          { name: 'Terno do Noivo', hex: '#34312D' },
        ],
      },
      {
        label: 'Padrinhos',
        description: 'Um tom que identifica o time de apoio.',
        colors: [
          { name: 'Cor recomendada', hex: '#C9B89A' },
        ],
      },
      {
        label: 'Convidados',
        description: 'Sugestões para quem brilhar junto.',
        colors: [
          { name: 'Marfim', hex: '#F4E9D8' },
          { name: 'Sálvia', hex: '#A8B5A0' },
          { name: 'Lavanda', hex: '#C2B8D0' },
          { name: 'Terracota', hex: '#D9A28B' },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 9 — LOCAL
     ---------------------------------------------------------------------- */
  venue: {
    kicker: 'Onde vai ser',
    title: 'Local da Celebração',
    name: 'Espaço La Forêt',
    address: 'Rua Yucca, 18 — Alto do Sabiá',
    city: 'São Roque — SP',
    time: '17h00 — abertura dos portões',
    info: [
      'Estacionamento coberto gratuito no local',
      'Valet disponível na entrada',
      'Espaço com acessibilidade completa',
    ],
    /* Coordenadas usadas no mapa incorporado (sem chave de API) */
    mapsQuery: '-23.5307,-47.1534',
    mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Espa%C3%A7o+La+For%C3%AAt,+Rua+Yucca,+18,+S%C3%A3o+Roque+-+SP',
    button: 'Abrir no Google Maps',
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 10 — CERIMÔNIA
     ---------------------------------------------------------------------- */
  ceremony: {
    kicker: 'A cerimônia',
    title: 'Cerimônia & Recepção',
    photo: 'img/local.jpeg',
    photoCaption: 'Espaço La Forêt — Alto do Sabiá',
    time: '17h00',
    details: [
      { icon: 'ring', label: 'Celebração', text: 'Cerimônia religiosa às 17h, seguida de coquetel, jantar e muita dança.' },
      { icon: 'sparkles', label: 'Cores', text: 'Elegante. Tons neutros e terrosos conforme a paleta do casamento.' },
      { icon: 'car', label: 'Estacionamento', text: 'Estacionamento coberto gratuito e valet à disposição na chegada.' },
      { icon: 'info', label: 'Observações', text: 'Confirme sua presença até 31/10/2026 e compartilhe restrições alimentares.' },
    ],
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 11 — LISTA DE PRESENTES
     ---------------------------------------------------------------------- */
  gifts: {
    kicker: 'Lista de Presentes',
    title: 'Como nos presentear',
    note: 'A maior felicidade é ter você conosco. Mas, se quiser nos presentear, aqui estão alguns sonhos que estamos montando:',
    buttonLabel: 'Presentear',
    items: [
      {
        name: 'Lua de Mel — Maldivas',
        description: 'Uma viagem dos sonhos para dois, ilha, mar azul e um pôr do sol só nosso.',
        price: 'R$ 12.000',
        link: '#',
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=70',
      },
      {
        name: 'Jantar à Luz de Velas',
        description: 'Aquela noite especial em um restaurante elegante, brindando o nosso amor.',
        price: 'R$ 600',
        link: '#',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=70',
      },
      {
        name: 'Kit do Novo Lar',
        description: 'Utensílios, louças e pequenos detalhes que vão dando cara ao nosso novo endereço.',
        price: 'R$ 450',
        link: '#',
        img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=70',
      },
      {
        name: 'Noite de Hotel 5 Estrelas',
        description: 'Um fim de semana de descanso e romance para comemorar mais um ano juntos.',
        price: 'R$ 1.400',
        link: '#',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=70',
      },
      {
        name: 'Café da Manhã na Cama',
        description: 'Para os domingos preguiçosos: café, pão quentinho, flores e boas risadas.',
        price: 'R$ 320',
        link: '#',
        img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=70',
      },
      {
        name: 'Curso de Culinária',
        description: 'Ajuda a dar o próximo passo na nossa cozinha — e nas nossas aventuras.',
        price: 'R$ 780',
        link: '#',
        img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=70',
      },
    ],
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 12 — CONFIRMAR PRESENÇA (RSVP)
     ---------------------------------------------------------------------- */
  rsvp: {
    kicker: 'Confirme sua presença',
    title: 'Confirmar Presença',
    deadline: 'Prazo de confirmação: até 01 de Outubro de 2026',
    button: 'Confirmar Presença',
    successTitle: 'Presença confirmada!',
    successText: 'Recebemos a sua confirmação. Obrigado por fazer parte do nosso grande dia. Qualquer novidade, avisaremos por aqui.',
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 13 — RECADOS
     ---------------------------------------------------------------------- */
  messages: {
    kicker: 'Mural de Recados',
    title: 'Deixe o seu recado',
    text: 'Escreva um carinho para os noivos. Cada mensagem será guardada com muito amor.',
    placeholder: 'Escreva aqui a sua mensagem de amor 🥂',
    sendButton: 'Enviar recado',
    samples: [
      { name: 'Ana Clara', message: 'Mari e Lucas, que o amor de vocês ilumine todos os dias! Mal posso esperar para dançar até o pé cansar!', date: '12/08/2026' },
      { name: 'Família Souza', message: 'Parabéns pelo grande dia! Nossa família raiz vibra de alegria. Que sejam felizes para sempre!', date: '20/08/2026' },
      { name: 'Gui & Bia', message: 'Foi uma honra testemunhar essa linda história. O casamento vai ser inesquecível!', date: '28/08/2026' },
    ],
  },

  /* ----------------------------------------------------------------------
     SEÇÃO 14 — CONTAGEM REGRESSIVA
     ---------------------------------------------------------------------- */
  countdown: {
    kicker: 'Marca na agenda',
    title: 'Esperamos por você',
    button: 'Salvar na Agenda',
    calendarNote: 'Clique para adicionar a cerimônia ao seu Google Calendar.',
  },

  /* ----------------------------------------------------------------------
     FOOTER
     ---------------------------------------------------------------------- */
  footer: {
    thanks: 'Obrigado por fazer parte da nossa história.',
    social: [
      { icon: 'instagram', label: 'Instagram', url: '#' },
      { icon: 'spotify', label: 'Spotify', url: '#' },
    ],
    copyrightName: 'Henry Santos',
    madeBy: 'Feito com amor para celebrar o nosso sim.',
  },

  /* ----------------------------------------------------------------------
     PREFERÊNCIAS GLOBAIS
     ---------------------------------------------------------------------- */
  smoothScroll: true,
};