# InfovisNFVProject
secondo progetto di Visualizzazione delle Informazioni

Il progetto consiste di una visualizzazione di una rete NFV, supposta a 8 macchine virtuali, ciascuna delle quali può eseguire determinate funzioni di rete, supposte 10 e nominate dalla A alla J.
Inoltre abbiamo considerato un numero variabile di utenti, 20 nella visualizzazione proposta, ma tale numero può essere cambiato nel file services.js.
Per ciascun utente viene randomizzata una service chain, dapprima il numero di job, dopodichè i jobs stessi ed infine le macchine virtuali che possono eseguire tali job.

La visualizzazione proposta dispone le macchine lungo una circonferenza ideale, dopodichè dispone i jobs in posizione convessa, per evitare quanto più possibile ambiguità nella rappresentazione.

Inizialmente viene eseguito il file svg.js, che prepara l'area di disegno e dispone le macchine virtuali.
In seguito viene eseguito il file machine.js, che si occupa di costruire i job all'interno delle macchine e contiene alcune funzioni di utility per valutare lo stato d'occupazione della macchina da parte di una funzione, in modo tale da poterne definire un colore appropriato in base al numero di chains che la attraversano.
Lo script denominato services.js è quello più consistente e si occupa di randomizzare utenti e service chains, nonchè di costruire, per ogni service, un path che mostri il percorso attraverso le macchine e i job. Vi sono all'interno di questo file numerose funzioni di utility per il calcolo dei punti del path, in particolare il punto iniziale, calcolato al primo job della catena, che parte al di fuori del grafo, il punto finale, consistente nel punto dove si trova il job corrente (in caso che questo non sia il primo job il punto iniziale è il punto finale precedentemente calcolato). Inoltre in caso che il job di partenza e il job di arrivo viene calcolato un punto intermedio al di fuori della circonferenza ideale lungo la quale sono allineati i job per evitare ambiguità (job attraversati da archi ma che non fanno effettivamente parte di quella chain). Per ultimo viene calcolato il punto finale, di uscita dal grafo.

Infine è stata aggiunta interattività, per consentire all'utente di evidenziare (sull'hover) un determinato path, o di colorarlo cliccandoci sopra.
Inoltre con un click destro su di un path è possibile aprire un menu contestuale che consente operazioni più particolari, come assegnare dei colori ad ogni path, in modo tale da evidenziarne diversi allo stesso tempo, cosa non fattibile con il click sinistro, oppure la possibilità di nascondere tutti i path tranne quello a cui il menu si riferisce, per permettere di seguire meglio una determinata chain senza che sia nascosta o coperta da altre chain con cui divide una parte del cammino.
Per i colori degli archi è stato scelto di utilizzare come colore di default una sfumatura di blu, che non sia troppo brillante per non rischiare di confondere l'utente, mentre per evidenziare gli archi sono state scelte sfumature di rosso allo scopo di sfruttare la color aberration per far risaltare all'occhio dell'utente gli archi evidenziati.

E' stata inoltre introdotta una legenda, che presenta una scala di colori dal verde al rosso per facilitare la lettura dei colori delle varie funzioni, con la possibilità di ridurre il riquadro che la contiene per migliorare la visibilità sul grafico.

Per finire sono state introdotte due tipi di tooltips, una sui path, allo scopo di chiarire l'ambiguità provocata da archi che si sovrappongono, che propone informazioni riguardo all'utente i-esimo che chiede tale service chain, e sulle funzioni, nell'ordine, che vengono chieste. Tale tooltip è attivabile sull'hover.
L'altra tooltip è su di un job, e propone informazioni riguardo lo stato di occupazione della macchina da parte di tale job, ovvero da quante chain è attraversato in quella particolare configurazione, ai fini di dare un'idea di quale è il collo di bottiglia di tale configurazione. Tale tooltip è attivabile con un click sul job e si disattiva con un timer di circa 3 secondi. Tale scelta è stata guidata dalla volontà di non sovraccaricare lo schermo di tooltip in caso di un posizionamento del cursore non troppo preciso sul job.

Per quanto riguarda la disposizione dei file all'interno del progetto il package view contiene una pagina html per la visualizzazione, mentre il package style contiene un file css e diverse icone usate nello sviluppo. Il package script contiene il codice javascript e d3.js scritto.

Si consiglia la visualizzazione con il browser Chrome, poichè su Firefox non riconosce alcune delle regole css necessarie alla corretta visualizzazione (una fra tutte la regola che imposta il gradiente della legenda), mentre non sono stati testati altri browser, per cui il comportamento potrebbe risultare inaspettato.

Marco Ramini
Rinaldo Buratti
