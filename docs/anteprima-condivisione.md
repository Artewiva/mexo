# Anteprima dei link

La condivisione della home usa `public/og.jpg`, una JPEG 1200 × 630 con la grafica della home. I metadati Open Graph e X/Twitter sono in `index.html`, così i crawler possono leggerli senza eseguire JavaScript. Il sito pubblico configurato è `https://mexo-8xoh.vercel.app/`.

Per cambiare l'immagine, sostituire `public/og.jpg` mantenendo formato e dimensioni. Vite aggiunge automaticamente agli URL dell'immagine una versione derivata dal contenuto (`?v=…`), identica nei metadati Open Graph, Twitter e nel fallback `image_src`. Non serve cambiare manualmente la versione. Se cambia il dominio pubblico, aggiornare gli URL assoluti in `index.html` e il controllo in `scripts/check-social-preview.mjs`.

## Verifica

```sh
npm ci
npm run test:social
npx tsc --noEmit
```

Il controllo verifica l'HTML generato e la presenza della JPEG nella build. Dopo la pubblicazione verificare anche che `/og.jpg` sia accessibile pubblicamente (HTTP 200, tipo `image/jpeg`), senza login o protezione del deployment.

Le piattaforme mantengono una propria cache del link, distinta dalla cache dell'immagine: il versionamento non forza una nuova lettura della pagina. Se compare ancora una vecchia anteprima, richiedere una nuova scansione tramite gli strumenti della piattaforma (ad esempio Facebook Sharing Debugger o LinkedIn Post Inspector). Su WhatsApp può essere necessario attendere oppure provare a condividere il link con un parametro nuovo, ad esempio `https://mexo-8xoh.vercel.app/?share=2`. I messaggi già inviati potrebbero non aggiornarsi. La visualizzazione finale dipende dall'app e dalle impostazioni del destinatario.
