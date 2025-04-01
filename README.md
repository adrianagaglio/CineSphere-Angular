# Catalogo film frontend (Demo)

Progetto generato con [Angular CLI](https://github.com/angular/angular-cli) versione 18.2.0.

## Descrizione 

Catalogo film. 

Permette:
- operazioni CRUD
- ricerca film per titolo
- ricerca film correlati per genere e autore
- registrazione nuovi utenti e login
- aggiunta e rimozione preferiti
- ratings dei film
- consultazione lista utenti registrati con relativi film preferiti

Tecnologie utilizzate:
- Angular 18.2
- Ngx Cookie Service
- Ng Bootstrap per web design e mobile responsive
- State management con libreria RxJs

## Eseguire l'applicazione con Docker (consigliato)

- Se non hai Docker installato, segui le istruzioni dal sito ufficiale: [Docker](https://docs.docker.com/desktop/)
- Esegui `docker build . -t cinesphere-fe-app` per creare l'immagine dell'applicazione con tutte le dipendenze necessarie al suo funzionamento
- Esegui `docker -d --name cinesphere-fe-container -p 4200:80 cinesphere-fe-app:latest` per creare ed eseguire il container per avviare l'applicazione
- Naviga `http://localhost:4200/`

## Eseguire l'applicazione sulla tua macchina locale (sconsigliato: richiede il download di tutti i pacchetti delle dipendenze)

- Esegui `npm i` per scaricare le dipendenze.
- Esegui `ng serve` per avviare il server di sviluppo.
- Naviga `http://localhost:4200/`.
- L'applicazione si aggiornarà automaticamente ad ogni modifica del file sorgente.

## Link al backend
- [CineSphere Backend Web App](https://cinesphere-java.onrender.com/swagger-ui/index.html) (documentazione endpoints)
- [CineSphere Backend GitHub](https://github.com/adrianagaglio/CineSphere-Java)
