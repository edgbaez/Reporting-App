## Creeper Reports

Overview: 

A reporting app for crimes and crime-like occurances that have happened around the your area. Users will anonymously write about the incident and the information will be used to create a danger rating for the area, as well as a description of possible assailents and links to each crime. This app is to track crimes early before reaching escalation as well as assist local police in catching criminals. AI will be used on top the data put into the system that will seek out similar events and string them together, to track criminals.  

Use:
1. run app
2. Collect information
3. Create areas danger rating
4. Display area events and danger rating
5. Create possible patterns in events
6. Strong patterns are to be collected and displayed on their on page

Options
1. Send to police
2. Viewing area of key information

Operations:
- Website: 
    - Main Page contains a search bar that accepts your location. This page will then display all events. (This part will require pagination)
    - Reporting page will contain a form that will be sent to the backend to be stored in the database
    - Linked crimes page will present possible patterns recognized by the AI. 
    - contact page
    
- Create danger rating: Backend function that will take all data from the database and then create an index. This will chunk the data by location, then create an expected danger rating. 
- Area Events: backend function that sends back events based on location
- Check Pattern: Scan all data for similar events to track crime

Testing:
    Unit Test:
        - Submit a event
        - store events
        - fetch events
        - create index
        - create danger rating
        - store danger ratings
        - update danger ratings
        - fetch danger rating
        - create pattern
        - fetch pattern
        - update pattern
        - store pattern

    Integration Test:
        - submit a report
        - load a location
        - see the danger rating for a location
        - see a pattern
        
For additional information: DownRampApps@gmail.com