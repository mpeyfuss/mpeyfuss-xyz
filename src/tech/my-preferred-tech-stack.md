---
title: My Preferred Tech Stack
tags: tech
date: 2025-11-30
layout: layout.njk
published: true
pinned: true
---

# My Preferred Tech Stack
*This is just the stuff that I like to use, but I don't limit myself to it*

## Fav Programming Languages
1. Python
2. Solidity/Vyper
3. Javascript/Typescript

Python is a great daily driver for pretty much anything imo. While it is dynamically typed, it has a strong typing system under the hood (looking at you JS/TS). There are so many libraries for python that span a variety of disciplines (web, blockchain, data analysis, robotics, AI, etc) that it really is quite good at most things. I also like how easy it is to read and audit.

Solidity and Vyper are domain specific languages for the Etherem Virtual Machine (EVM). I love building on the EVM. I find Solidity a bit faster to develop in at the moment, as I have a lot of experience with it and there are tons of libraries for Solidity, however, Vyper is a very good language as well. The tooling for Vyper is still evolving so when I need to get things done quickly (pretty much all the time), I still reach for Solidity.

Javascript and Typescript are the language for frontends. I know people like them for backend, but I can't stand them in the backend.

## Fav Frameworks

1. Django
2. React
3. Tailwind

I think the [Django](https://www.djangoproject.com/) framework in general is my favorite for building backends. I love the rails it lays down and if you learn how to build in the Django way, you can be extremely efficient and effective. People will say they run into issues with python backends, but I haven't had the issue with type safety or anything like that. Maybe it's because I work either by myself or in a small team, but implementing good engineering practices does wonders imo. Also test a BUNCH.

I typically build REST APIs, so I like using [Django Rest Framework](https://www.django-rest-framework.org/). There is a huge ecosystem for it and it works. It's not the speadiest thing out there but I've got some tricks to make it much more efficient than other blogs articles make it seem (hint: use gevent workers). There is also [Django Ninja](https://django-ninja.dev/) that I'm watching closely.

[React](https://react.dev/) is my favorite framework for frontend. It just kinda makes sense in my head. Also there are so many UI libraries built for React that make my life easier. I've built a lot in plain html, and I don't mind it, but if I'm going to build something, I typically reach for React because I enjoy the overall experience in it.

[NextJS](https://nextjs.org/) is a great framework for making multi-page apps. Single page apps with Vite are nice too for simple things. There are some other frameworks coming out built on top of react that I'm very interested in.

I know [Tailwind](https://tailwindcss.com/) isn't really a framework but it kinda is at the same time. I just love using Tailwind classes inline. It feels very performant and easy to reason about. There are Tailwind haters out there but I really enjoy it.