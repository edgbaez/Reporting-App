Reporting App

description:
    - An online and mobile app to report low priority incidents where nothing happened but potentially could have happened/ something happened and you don't want to tell the police. This will organize data and sort it by severity of the situation. The incidents will be reported anonymously and will be clumped together for similar cases. Cases of extreme nature will be passed to police. 

USE CASES:

Web App:

- front end: 
    - components
        - fix card
        
    - react:
        - Functionality:
            - Middleware
            - Test cases ( creating, updating, archive, reading )

- back end:
    - node js:
        - Endpoints:
            - create a report (post)
            - update a report (post)
            - archive a report (post)
            - read a report (get)
        
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
