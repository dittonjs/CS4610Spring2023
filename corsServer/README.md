# USU 4610 Simple Server
This project serves as a starting point for full-stack applications.

## Get Started
### Clone the repo
```bash
git clone git@github.com:dittonjs/usu-4610-simple-server.git
```
Once cloned you can delete the `.git` folder and reinitialize with your own repo

```bash
rm -rf .git
git init
```
The create your remote repository and commit and push to it.

### Install the dependencies

With yarn
```bash
yarn
```

With npm
```bash
npm install
```

## Development
### .env
Copy the contents of `.env.example` into a new file called `.env`.

### Database
Create the database by running
```bash
yarn db:migrate
```
You will need the re-run this command anytime you make changes to the schema file.

### Running thhe server
Start the server by running:

With yarn
```bash
yarn dev
```

With npm
```bash
npm run dev
```

## Production
Build the project by running

With yarn
```bash
yarn build
```

With npm
```bash
npm run build
```
