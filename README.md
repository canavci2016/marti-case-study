<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Overview

This projects aim for identifying on users location based on the predefined areas. when a user is detected to be in the provided areas. it is location is stored in the database.

project only offers several services to perform this feature. every service is provided a detailed description

#### 1-) User

it makes it possible to create an user on the system so that its location could be tracked . we must save at least one person in the system or else the logic is most likely lead to problem

```http
   
   ### { "name": "mert", "id": 6}
   POST http://localhost:3000/users
   Content-Type: application/json

   { 
     "name": "mert",
   }

  ### Expect [ { "id": 2, "name": "can" }, ... ]
   GET http://localhost:3000/users

   ```
#### 2-) Area

it enables us to define as many areas as we wish alongside their coordinates. please ensure you are transmitting location in the correct format otherwise it will cause a bug 

```http
   
   ### { "name": "mert", "id": 6}
   POST http://localhost:3000/areas
   Content-Type: application/json

  {
    "name": "area",
    "coordinates": [
        {
            "lat": 41.0722589,
            "lng": 28.9085927
        },
        {
            "lat": 41.0564687,
            "lng": 28.9077344
        },
        {
            "lat": 41.0668233,
            "lng": 28.9326253
        },
        {
            "lat": 41.0722589,
            "lng": 28.9085927
        }
    ]
}

  ### Expect [...Array Of Areas]
   GET http://localhost:3000/areas

   ```
#### 3-) Locations

people constantly publish their location and in case its location lies inside the defined areas. location is logged.



```http
   
   ### { "name": "mert", "id": 6}
   POST http://localhost:3000/locations
   Content-Type: application/json

  {
    "lat": 41.06306977527203,
    "lng": 28.918199771163952,
    "userId": 5
  }

  ### Expect [...Array Of Locations]
   GET http://localhost:3000/locations

   ```
#### 4-) Logs

this is the last service which is responsible for return logs of those location are detected to be inside an area.


```http
   
   ### [
    {
        "id": "46e8e957-cc82-4d07-b71e-94a73e220265",
        "content": "Location is in area area",
        "payload": [
            {
                "userId": 5,
                "locationId": "88e36290-43d9-4760-a86a-792d28a9d3da"
            }
        ],
        "created_at": "2025-03-17T06:09:59.346Z",
        "updated_at": "2025-03-17T06:09:59.346Z"
    }
]
   GET http://localhost:3000/logs
   Content-Type: application/json


   ```


If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
