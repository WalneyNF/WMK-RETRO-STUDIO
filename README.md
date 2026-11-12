# WMK Retro Studio — v0.2 (protótipo)

**Editor gratuito e open source para criar mapas 2D e testá-los como jogos FPS 2.5D no navegador.**

Autor: **Walney Moreira Klein — walneyk@hotmail.com**  
Repositório: https://github.com/WalneyNF/WMK-RETRO-STUDIO  
Licença do código-fonte original deste projeto: **MIT**.

## Primeiros passos

1. Baixe o repositório como ZIP e extraia em qualquer pasta no Windows.
2. Dê duplo clique em `INICIAR-WINDOWS.cmd` ou abra `index.html` no Chrome.
3. Selecione uma **camada** (piso, paredes, decoração ou objetos).
4. Escolha o pincel e **clique/arraste** na grade para pintar. Botão direito apaga.
5. Clique em **JOGAR FPS** para entrar na fase.
6. Salve pelo botão **Salvar JSON**; use **Abrir JSON** para continuar depois.

**Controles FPS:** WASD para movimento; setas esquerda/direita para olhar; mouse gira a câmera quando capturado; E interage com portas; Espaço atira; Esc volta ao editor.

## Implementado neste protótipo

- Editor 2D com grade e zoom, mapa de exemplo e editor de dimensões.
- Camadas de piso, paredes, decoração e objetos, com visibilidade e bloqueio para pintura.
- Parede, tijolo, metal, pedra, portas normais, azuis e douradas.
- Importação de spritesheet PNG/JPG/WebP, recortada em até 64 tiles por importação, para texturas de parede.
- Jogador, chaves azuis e douradas, inimigos simples, munição, kit médico e saída.
- Motor FPS de raycasting em Canvas; colisão; abrir porta com E; coletar itens e atirar.
- Exportação/importação de projetos JSON; desfazer/refazer básico.
- Código separado em `core.js`, `layers.js`, `renderer.js` e `app.js`.

## Limitações conhecidas

**Versão experimental, ainda não é um clone integral de Easy FPS Editor nem um editor comercial pronto.** Não inclui multiplayer, níveis verticais, física 3D real, IA com navegação complexa, importação de modelos 3D, animador de sprites, múltiplas fases conectadas ou EXE compilado. Os inimigos ficam em posições fixas e causam dano quando o jogador chega perto. A importação de tilesheets é aplicada às paredes; pisos/decor usam padrões internos. O suporte a mapas grandes e imagens pesadas ainda precisa ser otimizado.

A execução visual interativa deve ser validada no navegador do usuário. Testes automatizados verificam somente o núcleo de regras.

## Organização

```text
WMK-RETRO-STUDIO/
├── index.html               Interface completa
├── css/style.css            Aparência
├── js/core.js               Modelo de mapa e jogabilidade
├── js/layers.js             Camadas e tilesets
├── js/renderer.js           Raycaster FPS
├── js/app.js                Interface e controles
├── tests/test-core.js       Testes automatizados
├── manuais/                 Guias em português
├── LICENSE                  MIT
└── INICIAR-WINDOWS.cmd      Abertura sem instalação
```

## Testes de desenvolvimento

Se tiver Node.js instalado: `node tests/test-core.js`. Sem Node.js, é possível usar o aplicativo diretamente no navegador.

## Contribuições

Issues e pull requests são bem-vindos. Evite adicionar imagens, músicas, mapas ou código de jogos comerciais sem permissão. **Kenney e outros pacotes externos não foram incluídos neste ZIP**; importe seus próprios recursos e respeite as licenças individuais.

## Próximas versões

Consulte `manuais/ROADMAP.html`. Prioridade: biblioteca de tilesets com metadados, editor visual de eventos, gatilhos, movimentação de inimigos, animações e exportador jogável independente.
