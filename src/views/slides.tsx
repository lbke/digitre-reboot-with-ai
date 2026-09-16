import "@/index.css";

import { useRegisterViewTool, useViewport } from "skybridge/web";
import { Deck, Markdown, Slide, useReveal } from "@revealjs/react";
import type { Api } from "reveal.js";
import lbkeLogo from "../../assets/img/logo_lbke_complet_saumon_300.png";
// imported from the index.css file instead, here it doesn't work
// import "reveal.js/reveal.css";
// import "reveal.js/theme/black.css";

// @see https://docs.skybridge.tech/api-reference/use-register-view-tool#useregisterviewtool
// @see https://revealjs.com/react/
// @see https://revealjs.com/api/
function useNextSlideTool() {
  // TODO: open a ticket for this, it seems that RevealApi was renamed Api which breacks useReveal() typings
  const deck = useReveal() as Api;
  useRegisterViewTool(
    {
      name: "next_slide",
      description: "Next Slide",
      inputSchema: {},
      annotations: { readOnlyHint: false },
    },
    ({}) => {
      if (deck.isLastSlide()) {
        return { content: [{ type: "text", text: "Already at final slide." }] };
      }
      deck.next();
      return {
        content: [{ type: "text", text: "Going to next slide." }],
        structuredContent: { slideNb: deck.getSlidePastCount() },
      };
    },
  );
}
function usePrevSlideTool() {
  // TODO: open a ticket for this, it seems that RevealApi was renamed Api which breacks useReveal() typings
  const deck = useReveal() as Api;
  useRegisterViewTool(
    {
      name: "previous_slide",
      description: "Previous Slide",
      inputSchema: {},
      annotations: { readOnlyHint: false },
    },
    ({}) => {
      if (deck.isFirstSlide()) {
        return { content: [{ type: "text", text: "Already at first slide." }] };
      }
      deck.next();
      return {
        content: [{ type: "text", text: "Going to previous slide." }],
        structuredContent: { slideNb: deck.getSlidePastCount() },
      };
    },
  );
}

export default function Slides() {
  const { safeArea } = useViewport();
  useNextSlideTool();
  usePrevSlideTool();
  return (
    <Deck
      config={{
        height: 700,
      }}
      style={{
        height: 700,
        paddingBottom: safeArea.insets.bottom,
      }}
    >
      <Slide>
        <h1>MCP : Quoi de neuf en 2026?</h1>
        <p>Meetup GenAI Montpellier - 24 septembre 2026</p>
      </Slide>
      <Slide>
        <Markdown>
          {`
          ## Votre speaker

          Eric Burel

          Formateur IA agentique - Co-fondateur de LBKE

          LangChain, Mastra, MCP, RAG, web fullstack...

          ![Logo LBKE](${lbkeLogo})
          
          `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`
  ## Agent IA 

  = Prompt + LLM **+ outils**  
  (et une boucle while)

  *Exemple : "Claude, résoud ce ticket pour moi, débrouille toi avec l'API GitHub et le débogueur."*


  `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`
          # Besoin de nombreux outils

  Outil = du code + une description agissant comme un prompt

  🔎 Outils pour observer  
  🦾 Outils pour agir


          `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`

## MCP pour standardiser

~ API, mais pour les agents IA

Outils + prompts, ressources...

*Voir le talk de Laurent Bernard pour le meetup GenAI*

  `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`
## Un protocole purement backend

- Outils multi-étapes, HITL ?
- Pas de contrôle sur les widgets générés automatiquement
- Messages sérialisables => pas de transferts de binaires

  `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`

# 🕊️ MCP Apps 🙏

Des applis fullstack, en MCP !


  `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`

# Cas d'usage

- Mettre de la pub dans ChatGPT 🎉
- Peut-on faire mieux ?

*Démos issues d'une série d'articles à retrouver sur Quoi de neufs les devs*

  `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`

# Démo 0 : Ce slidedeck !

https://github.com/lbke/gen-ai-2026-mcp  
https://gen-ai-2026-mcp-20ca173a.alpic.live


  `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`

# Démo 1 : Doom dans Claude

https://github.com/lbke/mcp-use-doom  
https://keen-spark-10owm.run.mcp-use.com/mcp

Le WASM fonctionne !

  `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`

# Démo 2 : GPT Image dans Claude

https://github.com/lbke/mcp-apps-image-generator  
https://wild-spark-3dg4a.run.mcp-use.com/mcp

Fetch côté client, BYOK possible, contrôle sur l'UI, prompting assisté par l'IA

  `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`
## Coder vos propres MCP Apps

- FastMCP : Python + UI avec Prefab
- mcp-use : Python ou JavaScript, UI en React
- Skybridge : JavaScript, UI en react
- SDK officiel : Tous langages (support variable), UI JS/HTML/CSS

          `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`
## Bonus : WebMCP, petit frère des MCP Apps

= définir des outils dans une page web

Facilite la navigation des agents sur un site

          `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`
# Démo : WebMCP pour Zork

https://zork-phi.vercel.app/

Limité à Chrome Canary et ChatGPT desktop
          `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`

## Bilan : dev web ❤️ IA agentique

- Serveur MCP => dev backend
- MCP App => dev fullstack
- WebMCP => dev frontend

Du boulot pour les devs web !

          `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`
# Devenir pro du MCP

- Claude Academy ➡️ Claude Certified Architect
- Linux Foundation ➡️ MCP Associate
- LBKE ➡️ « Créer une application MCP pour l'IA agentique »
          `}
        </Markdown>
      </Slide>
      <Slide>
        <Markdown>
          {`
          Refs:
          - [MCP Apps - Quoi de neuf les devs](https://quoi-de-neuf-les-devs.happyto.dev/p/jusqu-a-2-9-milliards-de-commits-par-mois-keep-calm-and-stay-focused-quoi-de-neuf-les-devs-188#mcp-apps)
          - [Talk de Laurent Bernard sur le MCP](https://www.youtube.com/watch?v=alBXGtUO1C4)
- [Claude Academy](https://academy.claude.com/)
- [MCPA (Linux Foundation)](https://training.linuxfoundation.org/certification/model-context-protocol-associate-mcpa/)
- [LBKE- Créer une application MCP pour l'IA agentique](https://www.lbke.fr/formations/ia/mcp)
          `}
        </Markdown>
      </Slide>
    </Deck>
  );
}

/**
export default function Onboarding() {
  // useUser: read user environment info (theme, locale, user agent).
  const { theme } = useUser();

  const [step, setStep] = useState(0);
  const { img } = useMascot();

  return (
    <div
      className={`${theme === "dark" ? "dark" : ""} mx-auto w-full max-w-4xl border border-border overflow-hidden bg-background text-foreground`}
    >
      <div className="min-h-136 md:min-h-95 flex flex-col items-center gap-6 p-6 bg-linear-to-br from-purple-50 via-white to-cyan-50 dark:from-purple-950/30 dark:via-zinc-950 dark:to-cyan-900/30 bg-size-[200%_200%] animate-aurora md:flex-row md:items-stretch">
        <div className="shrink-0 self-center animate-float">
          <img
            src={img}
            alt="Skybridge mascot"
            className="h-32 w-32 md:h-50 md:w-50 object-contain animate-twirl"
          />
        </div>
        <div className="flex w-full flex-1 flex-col gap-6">
          <Progress
            steps={STEPS.map(({ label }) => label)}
            current={step}
            onSelect={setStep}
          />
          <div className="grid flex-1">
            {STEPS.map(({ label, Component }, i) => (
              <div
                key={label}
                className={`col-start-1 row-start-1 flex flex-col gap-6 ${
                  step === i ? "" : "invisible pointer-events-none"
                }`}
                aria-hidden={step !== i}
              >
                <Component />
              </div>
            ))}
          </div>
          <Nav current={step} total={STEPS.length} onChange={setStep} />
        </div>
      </div>
    </div>
  );
}
 */
