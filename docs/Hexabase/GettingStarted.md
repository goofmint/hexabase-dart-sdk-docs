---
title: Getting Started with the SDK
sidebar_label: 'Getting Started'
slug: /
---

SDK is a set of predefined pieces functions, wrappers, libraries, and conventions provided by Hexabase that developers can use to buildd applications for frontend platform.

this SDK includes

- Functions => pre-defined pieces of code that wraps hexabase API, and let developers perform common programming tasks on the platform.
- Conventions => to help aid the developers to build applications within hexabase conventions. Which requires developers to almost no configurations
- Standardizations => this helps write applications behave consistently, run in different frameworks, and are easy to test.
- Utilities => to help simplify many common use cases, like storing/reading tokens, json response wrangling, and many more to come.



# Concepts In Hexabase
Before we get deep dive, let's know how hexabase is structured, and what this SDK could offer to us.

In Hexabase, we provide facility to organize data rows using relations. We dive this responsiblities in to different parts in to heirarchy models and relationships. With this, we can organize well specific tasks, actions, and certain data into a simple way, securely, easy to manage, and reliable.

Starting with <mark>Workspace</mark>, it is the most top level of the heirarchy of relations, can edit essential settings to define how your current workspace would appear, behave, security roles, as well as linking other workspaces and many more. 

next is <mark>Application</mark>, this is where we come close in the middle of the heirarchy, where we act as the center of relationships between `has_many` and `belongs_to` workspaces, and datastores. in contrast to workspaces, <mark>Applications</mark> works like a workspaces, but the only difference heirarchy with a little more configuration. 

lastly, as the most next important to the heirarchy is the <mark>Datastore</mark>, this is where we hold, many actions, managements, relations for the logical data items or rows.

To get in to this concepts, We Introduce <mark>Hexabase SDK</mark> with pre-defined features that will let developers perform consistent common programming tasks to the platform. and behave more reliable, simplify common use cases implementations, and many more in to an environment which requires to almost zero configurations.

This is the most basic whole Idea of <mark>Hexabase</mark> and the <mark>SDK</mark>