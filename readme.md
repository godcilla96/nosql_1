# Moment 3 - NoSQL-databaser
I den här uppgiften används NoSQL-databasen MongoDB för att skapa och ansluta till en databas.
Det är ett API byggt med express.js för att hantera arbetslivserfarenheter i ett CV. För att underlätta hanteringen av databasoperationer har mongoose används. 

## API Endpoints

### GET /api
- **Beskrivning:** Visar en välkomsthälsning till API:et.
- **Användning:** GET /api

### GET /workexperience
- **Beskrivning:** Hämtar alla arbetslivserfarenheter från databasen.
- **Användning:** GET /workexperience

### POST /workexperience
- **Beskrivning:** Lägger till en ny arbetslivserfarenhet i databasen.
- **Användning:** POST /workexperience

### PUT /workexperience/:id
- **Beskrivning:** Uppdaterar en befintlig arbetslivserfarenhet i databasen baserat på det angivna ID:et.
- **Användning:** PUT /workexperience/:id
- **Parametrar:** id - ID:et för den arbetslivserfarenhet som ska uppdateras.

### DELETE /workexperience/:id
- **Beskrivning:** Tar bort en arbetslivserfarenhet från databasen baserat på det angivna ID:et.
- **Användning:** DELETE /workexperience/:id
- **Parametrar:** id - ID:et för den arbetslivserfarenhet som ska raderas.