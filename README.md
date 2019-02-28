Reporting App

description:
    - An online and mobile app to report low priority incidents where nothing happened but potentially could have happened/ something happened and you don't want to tell the police. This will organize data and sort it by severity of the situation. The incidents will be reported anonymously and will be clumped together for similar cases. Cases of extreme nature will be passed to police. 

Front-end web: react
Front-end mobile: react native
Back-end: Node.js
Code-Check: Node.js (maybe replaced by python)

Front-end: Accepts events through forms and sends them to back-end. It will also show all events that have happened or sort through events by location.

Back-end: Saves events to mysql db and reads db.

Code-Check: Sorts through db for events that are similar to each other in order to bring more awareness to a common occurance. 

USE CASES:

- where to host?
- pipelines?
- how much will this cost?

- create TDD test cases for all sections

DB Scheme:

Web App:
(go through logic of front end)
- front end: 
    - components
        - fix card
        
    - react:
        - Functionality:
            - Test cases ( creating, updating, archive, reading )

- back end:
    - node js:

        - database:
            - 3 instances of dbs ( main, backup, old )

            - model:
                - Tables:
                    - Reports:
                        - title
                        - location
                        - description
                    - Archived: ( situations that are 6 months old without new updates/new reports will be moved to lower priority db)
                        - title
                        - location
                        - description

Mobile App

- front end
    - react-native or android
        - Pages:
            - Main window for reading reports based on area ( input area )
            - Add a report form ( What happened? Where did it happen? Description? )

        - Functionality:
            - Middleware
            - Reducers
            - Action listener
            - Store
            - Router
            - Test cases ( creating, updating, archive, reading )

- back end ( use same back end as web app):
    - node js:
        - Endpoints:

            - create a report
            - update a report
            - archive a report
            - read a report

        - database:

            - Mysql or Mongo ( pref Mysql to connect addresses )
            - 3 instances of dbs ( main, backup, old )

            - model:
                - Tables:
                    - Reports:
                        - Id #
                        - situation
                        - location
                        - description of assailant 
                    - Archived: ( situations that are 6 months old without new updates/new reports will be moved to lower priority db)
                        - Id #
                        - situation
                        - location
                        - description of assailant

AI/Scan:

- Program:

    - JS probably:
        - Scan Situations for trigger words ( knife, gun, rape, groped, touched, and an expandable library)
        - Sort situations based on similarities ( how close will these situations be? e.g. 75% similar )
        - Contact Police if extreme / fill out report with police ( have change ticket system of person checking the situation ) (prevents DDOS)
        - Chron job (how often should this be run? Once a week or Daily?)
    - tasks
        - move data
        - archive data
        - interpret data
        - chunk data
        - delete data
        - sort by location and by importance 
