import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe],
  templateUrl: './app.html',
})
export class App {
  protected readonly logoUrl = '/logo.jpeg';
  protected readonly heroPhotoUrl = '/foto1.jpeg';
  protected readonly aboutPhotoUrl = '/foto2.jpeg';

  protected readonly results = [
    { src: '/resultado1.png', alt: 'Transformação física — antes e depois, aluna BG Team' },
    { src: '/resultado2.png', alt: 'Evolução corporal — antes e depois, consultoria BG Team' },
    { src: '/resultado3.png', alt: 'Resultado de definição muscular — aluna BG Team' },
    { src: '/resultado4.jpeg', alt: 'Evolução do abdômen — antes e depois, aluna BG Team' },
    { src: '/resultado5.jpeg', alt: 'Transformação corporal — antes e depois, consultoria BG Team' },
    { src: '/resultado6.jpeg', alt: 'Resultado de condicionamento e definição — aluna BG Team' },
  ];

  protected readonly presencialAreas = 'Florianópolis e Grande Florianópolis';

  protected readonly presencialFeatures = [
    'Treino supervisionado presencialmente',
    'Correção técnica em tempo real',
    'Ajuste de carga e execução no momento',
    'Estratégia alinhada ao seu objetivo',
    'Ideal para quem prefere acompanhamento ao vivo',
  ];

  protected readonly whatsappPresencialMessage = encodeURIComponent(
    'Olá Beatriz! Tenho interesse no personal presencial. Gostaria de saber sobre disponibilidade, valores e horários.',
  );
  protected readonly currentYear = new Date().getFullYear();
  protected readonly whatsappUrl = 'https://wa.me/5548991897143';
  protected readonly whatsappTeamMessage = encodeURIComponent(
    'Olá Beatriz! Quero fazer parte da BG Team. Gostaria de mais informações sobre os planos.',
  );
  protected readonly instagramUrl = 'https://instagram.com/treinadora_biaguizoni';
  protected readonly email = 'bgteamconsultoria@gmail.com';

  protected readonly navLinks = [
    { href: '#proposta', label: 'Consultoria' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#resultados', label: 'Resultados' },
    { href: '#presencial', label: 'Presencial' },
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#planos', label: 'Planos' },
    { href: '#pagamento', label: 'Pagamento' },
    { href: '#contato', label: 'Contato' },
  ];

  protected readonly menuOpen = signal(false);

  protected readonly heroHighlights = [
    'Treino individualizado',
    'Suporte diário direto',
    'Progressão monitorada',
    'Correção técnica e mobilidade',
  ];

  protected readonly painPoints = [
    'treinar sem evolução',
    'não saber se está executando certo',
    'perder motivação',
    'trocar de treino toda hora',
    'não ter acompanhamento de verdade',
  ];

  protected readonly protocolCriteria = [
    'seu objetivo',
    'sua rotina',
    'seu nível',
    'suas limitações',
    'sua evolução ao longo do processo',
  ];

  protected readonly goals = [
    'hipertrofia',
    'definição',
    'emagrecimento',
    'recomposição corporal',
    'melhora de performance',
  ];

  protected readonly benefits = [
    {
      title: 'Treino 100% Individualizado',
      description:
        'Treino estruturado conforme seu objetivo, rotina, nível e necessidade, utilizando progressão de carga e controle de esforço para garantir evolução constante.',
    },
    {
      title: 'Suporte Diário',
      description:
        'Acompanhamento contínuo diretamente comigo para tirar dúvidas, ajustar estratégias e acompanhar sua evolução de perto.',
    },
    {
      title: 'Avaliação Postural',
      description:
        'Análise para identificar limitações, desequilíbrios e pontos de melhoria, otimizando sua performance e segurança.',
    },
    {
      title: 'Correção Técnica e Mobilidade',
      description:
        'Análise dos seus vídeos com orientações para melhorar sua execução, prevenir erros e potencializar resultados.',
    },
    {
      title: 'Conteúdos Exclusivos',
      description:
        'Acesso a vídeos, ebooks e conteúdos premium sobre treinamento e evolução física.',
    },
    {
      title: 'Progressão de Carga Monitorada',
      description:
        'Controle estratégico da evolução das cargas e desempenho para garantir estímulo eficiente e contínuo.',
    },
    {
      title: 'Biblioteca de Exercícios',
      description:
        'Acesso completo a vídeos de exercícios, ativações, alongamentos e mobilidades.',
    },
    {
      title: 'Planilha de Evolução',
      description:
        'Planilha periodizada para registro de cargas, acompanhamento diário e monitoramento real da sua evolução.',
    },
  ];

  protected readonly steps = [
    {
      number: '01',
      title: 'Escolha seu plano',
      description: 'Escolha a modalidade ideal para seu objetivo e faça o pagamento.',
    },
    {
      number: '02',
      title: 'Envie suas informações',
      description:
        'Você preencherá uma anamnese completa, enviará fotos e vídeos para avaliação de mobilidade e execução. Com base nessas informações, todo o seu protocolo será estruturado de forma individualizada.',
    },
    {
      number: '03',
      title: 'Receba seu protocolo personalizado',
      description:
        'Seu plano será desenvolvido estrategicamente e entregue em até 5 dias úteis.',
    },
  ];

  protected readonly plans = [
    {
      id: 'mensal',
      name: 'Mensal',
      highlight: false,
      outline: true,
      tag: null as string | null,
      features: [
        'Investimento mensal',
        'Sem fidelidade',
        'Acompanhamento individualizado',
      ],
      icon: 'calendar',
    },
    {
      id: 'trimestral',
      name: 'Trimestral',
      highlight: true,
      outline: false,
      tag: 'Mais escolhido',
      features: [
        'Tempo ideal para evolução consistente',
        'Melhor adaptação ao protocolo',
        'Acompanhamento contínuo',
      ],
      icon: 'timer',
    },
    {
      id: 'semestral',
      name: 'Semestral',
      highlight: false,
      outline: false,
      tag: null,
      features: [
        'Ideal para definição e recomposição corporal',
        'Evolução monitorada a longo prazo',
        'Estratégia contínua de progressão',
      ],
      icon: 'chart',
    },
    {
      id: 'anual',
      name: 'Anual',
      highlight: false,
      outline: false,
      tag: null,
      features: [
        'Transformação completa',
        'Prioridade no suporte',
        'Maior consistência e evolução física',
      ],
      icon: 'crown',
    },
  ];

  protected planMessage(planName: string): string {
    return encodeURIComponent(
      `Olá Beatriz! Tenho interesse no plano ${planName} da BG Team. Gostaria de mais informações.`,
    );
  }

  protected readonly resultIndex = signal(0);

  protected nextResult(): void {
    this.resultIndex.update((i) => (i + 1) % this.results.length);
  }

  protected prevResult(): void {
    this.resultIndex.update((i) => (i - 1 + this.results.length) % this.results.length);
  }

  protected goToResult(index: number): void {
    this.resultIndex.set(index);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => {
      const next = !open;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }
}
