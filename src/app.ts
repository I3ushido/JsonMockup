import express, {Application, Request, Response, NextFunction} from "express";
import {address,
  commerce,
  company,
  database,
  hacker,
  helpers,
  git,
  phone,
  music,
  name,
  date,
  } from 'faker';


const PORT:number = 5000

// Property of Address
interface Address {
  city: string;
  cityPrefix:string
  citySuffix:string
  cityName:string;
  state: string;
  stateAbbr:string;
  zipCode: string;
  latitude: string;
  longitude: string;
  direction: string
  cardinalDirection: string;
  ordinalDirection: string
  nearbyGPSCoordinate: string[]
  streetName:string;
  streetAddress:string;
  streetSuffix:string
  streetPrefix:string
  secondaryAddress:string
  county:string
  country: string;
  countryCode: string
  timeZone:string;
}

// Property of Commerce.
interface Commerce {
  color: string;
  department: string;
  productName: string;
  price: string;
  productAdjective: string;
  productMaterial: string;
  product: string;
  productDescription: string;
}

// Property of Company.
interface Company{
  suffixes: string[];
  companyName: string;
  companySuffix: string;
  catchPhrase: string;
  bs: string;
  catchPhraseAdjective: string;
  catchPhraseDescriptor: string;
  catchPhraseNoun: string;
  bsAdjective: string;
  bsBuzz: string;
  bsNoun: string;
}

// Property of Database.
interface Database{
  column: string;
  type: string;
  collation: string;
  engine: string;
}

// Property of Hacker.
interface Hacker {
    abbreviation: string;
    adjective: string;
    noun: string;
    verb: string;
    ingverb: string;
    phrase: string;
}

// Property of Git.
interface Git{
  branch: string
  commitEntry: string
  commitMessage: string
  commitSha: string
  shortSha: string
}

// Property of Phone.
interface Phone{
  phoneNumber:string
  phoneNumberFormat: string
  phoneFormats: string
}

// Property of Music.
interface Music {
  genre: string
}

// Property of Name.
interface Name{
  firstName:string
  lastName:string
  middleName:string
  findName:string
  jobTitle:string
  gender:string
  prefix:string
  suffix:string
  title:string
  jobDescriptor:string
  jobArea:string
  jobType:string
}

// Property of Date. 
interface Date_ {
  past:Date
  future: Date
  recent: Date
  soon: Date
  month: string
  weekday: string
}

const app:Application = express()

app.get('/',(req: Request,res: Response)=> {
  res.send('System Online')
})

app.get('/address', (req: Request, res: Response)=> {
  const total :number = req.query.total as unknown as number; 
  const addressList = [] 
  for (let i:number = 0; i < +total; i++) {
    let address_value :Address={
      city: address.city(),
      cityPrefix: address.cityPrefix(),
      citySuffix: address.citySuffix(),
      cityName: address.cityName(),
      state: address.state(),
      stateAbbr: address.stateAbbr(),
      zipCode: address.zipCode(),
      latitude: address.latitude(),
      longitude: address.longitude(),
      direction: address.direction(),
      cardinalDirection: address.cardinalDirection(),
      ordinalDirection: address.ordinalDirection(),
      nearbyGPSCoordinate: address.nearbyGPSCoordinate(),
      streetName: address.streetName(),
      streetAddress: address.streetAddress(),
      streetPrefix: address.streetPrefix(),
      streetSuffix: address.streetPrefix(),
      secondaryAddress: address.secondaryAddress(),
      county: address.county(),
      country: address.country(),
      countryCode: address.countryCode(),
      timeZone: address.timeZone()
    }
    addressList.push(address_value)
  }
    res.send(addressList)
})

app.get('/commerce', (req: Request, res: Response)=> {
  const total:number = req.query.total as unknown as number
  const commerceList = []
  for(let i:number=0 ;i< +total;i++){
    let commerce_value:Commerce={
      color: commerce.color(),
      department: commerce.department(),
      productName: commerce.productName(),
      price: commerce.price(),
      productAdjective: commerce.productAdjective(),
      productMaterial: commerce.productMaterial(),
      product: commerce.product(),
      productDescription: commerce.productDescription()
    }
    commerceList.push(commerce_value)
  }
  res.send(commerceList)
})

app.get('/company', (req: Request, res: Response)=>{
  const total: number = req.query.total as unknown as number
  const companyList = []
  for(let i:number=0; i < +total; i++){
    let companyValue:Company={
      suffixes: company.suffixes(),
      companyName: company.companyName(),
      companySuffix: company.companySuffix(),
      catchPhrase: company.catchPhrase(),
      bs: company.bs(),
      catchPhraseAdjective: company.catchPhraseAdjective(),
      catchPhraseDescriptor: company.catchPhraseDescriptor(),
      catchPhraseNoun: company.catchPhraseNoun(),
      bsAdjective: company.bsAdjective(),
      bsBuzz: company.bsBuzz(),
      bsNoun: company.bsNoun()
      
    }
    companyList.push(companyValue)
  }
  res.send(companyList)
})

app.get('/database', (req: Request, res: Response)=>{
  const total: number = req.query.total as unknown as number
  const databaseList = []
  for(let i:number =0;i<total;i++){
    let databaseValue:Database={
      column:database.column(),
      type: database.type(),
      collation: database.collation(),
      engine: database.engine()
    }
    databaseList.push(databaseValue)
  }
  res.send(databaseList)
})

app.get('/hacker',(req: Request, res: Response)=> {
  const total: number = req.query.total as unknown as number
  const hackerList = []
  for(let i:number =0;i< total;i++){
    let hackerValue:Hacker={
      abbreviation: hacker.abbreviation(),
      adjective: hacker.adjective(),
      noun: hacker.noun(),
      verb: hacker.verb(),
      ingverb: hacker.ingverb(),
      phrase: hacker.phrase()
    }
    hackerList.push(hackerValue)
  }
  res.send(hackerList)
})

// UserCard.
app.get('/usersCard',(req: Request, res: Response)=> {
  const total: number = req.query.total as unknown as number
  const userList = []
  for(let i:number = 0;i< +total;i++){
    let userValue = helpers.userCard()
    userList.push(userValue)
  }
  res.send(userList)
})

// Git
app.get('/git',(req: Request, res: Response)=> {
  const total: number = req.query.total as unknown as number
  const gitList = []
  for(let i:number = 0 ;i< +total;i++){
    let gitValue:Git={
      branch: git.branch(),
      commitEntry: git.commitEntry(),
      commitMessage: git.commitMessage(),
      commitSha: git.commitSha(),
      shortSha: git.shortSha(),
    }
    gitList.push(gitValue)
  }
  res.send(gitList)
})

// Mobile Phone.
app.get('/phone',(req: Request, res: Response)=> {
  const total: number = req.query.total as unknown as number
  const phoneList = []
  for(let i:number = 0;i< +total;i++){
    let phoneValue:Phone={
      phoneNumber: phone.phoneNumber(),
      phoneNumberFormat: phone.phoneNumberFormat(),
      phoneFormats: phone.phoneFormats()
    }
    phoneList.push(phoneValue)
  }
  res.send(phoneList)
})

// Type of Music.
app.get('/music',(req: Request, res: Response)=> {
  const total:number = req.query.total as unknown as number
  const musicList = []
  for(let i:number=0;i< +total;i++){
    let musicValue:Music={
      genre: music.genre()
    }
    musicList.push(musicValue)
  }
  res.send(musicList)
})

// Name.
app.get('/name',(req: Request, res: Response)=> {
  const total: number = req.query.total as unknown as number
  const nameList = []
  for(let i: number= 0;i< +total; i++){
    let nameValue:Name={
      firstName: name.findName(),
      lastName: name.lastName(),
      middleName: name.middleName(),
      findName: name.findName(),
      jobTitle: name.jobTitle(),
      gender: name.gender(),
      prefix: name.prefix(),
      suffix: name.suffix(),
      title: name.title(),
      jobDescriptor: name.jobDescriptor(),
      jobArea: name.jobArea(),
      jobType: name.jobType(),
    }
    nameList.push(nameValue)
  }
  res.send(nameList)
})

// Date
app.get('/date',(req: Request, res: Response)=>{
  const total: number = req.query.total as unknown as number
  const dateList = []
  for(let i:number = 0;i< +total;i++){
    let dateValue:Date_={
      past: date.past(),
      future: date.future(),
      recent: date.recent(),
      soon: date.soon(),
      month: date.month(),
      weekday: date.weekday()      
    }
    dateList.push(dateValue)
  }
  res.send(dateList)
})

// Transaction.
app.get('/transaction',(req: Request, res: Response)=> {
  const total: number = req.query.total as unknown as number
  const transactionsList = []
  for(let i:number =0;i < total;i++){
    let transactionValue = helpers.createTransaction()
    transactionsList.push(transactionValue)
  }
  res.send(transactionsList)
})


// Contextual Card.
app.get('/contextualCard',(req: Request, res: Response)=> {
  const total: number = req.query.total as unknown as number
  const contextualList = []
  for(let i:number =0;i < total;i++){
    let contextualValue = helpers.contextualCard()
    contextualList.push(contextualValue)
  }
  res.send(contextualList)
})

// createCard
app.get('/createCard',(req: Request, res: Response)=>{
  const total:number = req.query.total as unknown as number
  const cardList = []
  for(let i: number = 0; i< total;i++){
    let cardValue = helpers.createCard()
    cardList.push(cardValue)
  }
  res.send(cardList)
})


app.listen(PORT, () => console.log(`Server is Running on http://localhost:${PORT}`))