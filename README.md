# spaceOut!



![](https://images.squarespace-cdn.com/content/584738ff20099e6c2da92f74/1566487971226-METBP6JOTRMTIMTYUWKR/Wellness-Architecture-Concrete-Accent-Green-Wall-1.jpg?content-type=image%2Fjpeg)



## Description

​	SpaceOut is a user-friendly platform enabling you to find and book a co-working space on an hourly rate. Change your office environment as often as you want choosing among various options in your area! 

​	You can become a space provider by listing your unused equipped space. Convert those square meters into your passive income!



## User Stories

- 
- As a user, I want view various spaces options directly on the home page
- As a user, I want to be able to search for spaces using my custom criteria
- As a user, I want to be able to view available spaces that fit my search criteria on the search results page
- As a user, I want to be able to view the space search result located on a map on the search results page
- As a user, I want to be able to update the search criteria on the search results page
- As a user, I want to be able to create, edit and delete my account on my account page
- As a user, I want to be able to authenticate myself on the authentication page
- As a space provider, I want to be able to create, edit and delete my space on my space page
- As a client, I want to be able to book a space on the space page
- As a user, I want to be able to cancel my booking in my profile view
- As a user, I want to be able to view my upcoming bookings on my profile page
- As a user, I want to be able to view my booking history on my profile page
- As a user, I want to be able to familiarize with the answers to frequently asked questions on the FAQ page



## Server Routes

| Method | Route                    | Description                                                  | Request - Body                                               |
| ------ | ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`  | /                        | Homepage                                                     |                                                              |
| `GET`  | /auth                    | Renders the Authentication Page                              |                                                              |
| `POST` | /auth/signup             | Creates a New User Account, Appends a New User Document to the Database and Redirects the User to the Previously Viewed Page | {username, email, password, dateOfBirth}                     |
| `POST` | /auth/login              | Authenticates an Existing User and Redirects the User to the Previously Viewed Page | {username, email, password, dateOfBirth}                     |
| `POST` | /auth/logout             | Destroys the Session and Redirects Unauthenticated User to Homepage | {id}                                                         |
| `GET`  | /search                  | Renders Search Result Page                                   |                                                              |
| `GET`  | /space/:id               | Space Details Page                                           |                                                              |
| `GET`  | /user                    | Renders Profile Page of the User                             |                                                              |
| `GET`  | /user/edit               |                                                              |                                                              |
| `POST` | /user/edit               | Updates User's Profile Info and Refreshes the Profile Page after Editing | {imageUrl, username, phoneNumber, dateOfBirth}               |
| `POST` | /user/delete             | Deletes User's Profile and Redirects to Homepage Unauthenticated | {_id}                                                        |
| `GET`  | /user/space/add          | Renders a Form to Create and Publish a Space                 |                                                              |
| `POST` | /user/space/add          | Adds New Space to DB and Refreshes the Space Page            | {[imageUrl], name, address, locationUrl, capacity, welcomePhrase, [amenities], pricePerHour, priceCurrency, discount} |
| `GET`  | /user/space/:id          | Renders Space Page for an Authenticated User                 |                                                              |
| `POST` | /user/space/edit/:id     | Updates Provider's View of Space Page and Refreshes the Space Info after Editing | {[imageUrl], name, address, locationUrl, capacity, welcomePhrase, [amenities], pricePerHour, priceCurrency, discount} |
| `POST` | /user/space/delete/:id   | Deletes the Space and Redirects Provider to Their Profile Page | {_id}                                                        |
| `POST` | /user/space/book/:id     | Creates a Booking and Redirects User to their Profile Page   | {clientID, spaceID, startDate, endDate, priceAmount, priceCurrency, discount} |
| `POST` | /user/booking/cancel/:id | Cancels the Booking and Refreshes User's Profile Page        |                                                              |
| `GET`  | /faq                     | Renders the FAQ Page                                         |                                                              |



## Models



User Model 

```User {
{
     "username": { type: String, required: true},
     "email": {type: String, required: true},
     "password": {type: String, required: true},
     "imageUrl": String,
     "dateOfBirth": Date,
     "phoneNumber": [{type: String}],
     "bookingHistory": [{type: Schema.Type.ObjectId, ref:"Booking"}],
     "isProvider": Boolean,
     "spaces": [{type: Schema.Type.ObjectId, ref:"Space"}],
     "reviews": [{reviewID: {type: Schema.Type.ObjectId, ref:"Review"}}]
}
```

  

Space Model

```
{	"name": String,
    "locationUrl": String,
    "address": String,
    "capacity": Number,
    "providerID": [{type: Schema.Type.ObjectId, ref:"User"}],
    "rating": Number,
    "isActive": Boolean,
    "imageUrl": [String],
    "welcomePhrase": String,
    "amenities": [{type: String, enum: ['WiFi, 'WC', 'Coffee machine', 'Refrigerator', 			'Phone booth', 'Terrace', 'Indoor smoking patio', 'Ergonomic Equipment']}],
    "pricePerHour": Number,
    "priceCurrency": String,
    "discount": {type: Number, min:0, max:1, default:0},
    "reviews": [{reviewID: {type: Schema.Type.ObjectId, ref:"Review"}}]
}
```



Booking Model

```
{
        clientID: {type: Schema.Type.ObjectId, ref:"User"},
        spaceID: {type: Schema.Type.ObjectId, ref:"Space"},
        startDate: Date,
        endDate: Date,
        durationInHours: Number,
        priceAmount: Number,
        priceCurrency: String,
        discount: { type: Number, max: 1, min: 0, default: 0 },
        cancelled: {
            date: Date, 
            cancelledBy: {type: Schema.Type.ObjectId, ref:"User"}, 
            refund: {type:Number, default: 0}
        },
        review: {type: Schema.Type.ObjectId, ref:"Review"}
}
```



## Backlog

- Built-in messenger
- Notifications
- Reviews
- Booking modification



## Links

#### Git

[Repository Link](link)

[Deploy Link](link)

#### Planning

[Our Trello Board](https://trello.com/b/dTfe81SM/spaceout)

[Wireframes](https://balsamiq.cloud/sodlzmx/p94avnu/r4452)

#### Presentation

[Check out our slides](link)



