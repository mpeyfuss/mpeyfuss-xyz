---
title: How to Stay Secure Online
tags: tech
date: 2024-08-04
image: /assets/og/how_to_stay_secure_online.png
card: /assets/card/how_to_stay_secure_online.png
layout: layout.njk
published: true
---
![How to Read URLs](/assets/og/how_to_stay_secure_online.png)

# How to Stay Secure Online

*It doesn't take much to stay secure, just some new systems and patience*

## Why Do I Need This?

We need to all secure ourselves. Online attacks are on the rise, but there are several easy steps we can all take to make our accounts more secure. So let’s lock it down!

## 🔒 Password Management
If you’re still making up your own passwords, STOP. Seriously, there are so many better ways to create passwords for all your accounts.

Use a password manager. [1Password](https://1password.com/) or [Bitwarden](https://bitwarden.com/) are great and battle-tested. I wouldn't recommend anything else tbh. I like 1Password myself, the paid features are worth it.

For the master password on your password manager, make up a secure password using mnemonics to string words and numbers together. This makes it easier to remember and is just as strong as randomly putting different letters and numbers together and memorizing that. **NEVER write this down.**

A good example of a mnemonic password is "blueHourScratch11!". It's easy for humans to remember but hard to guess. It's also at least 16 characters, which is strong.

Yeah I know people will say that having a single password to your password manager is vulnerable, but if you make it strong enough and never use it for anything else, it’s the least of all the evils. Being secure on the internet is really all about making it annoying for attackers to get past your defenses.

## 📲 2FA
If you have SMS/Text/Phone 2FA enabled on your accounts when you have other options, stop it! SIM swaps are too frequent, especially in crypto where money flows easily.

Authenticator apps are a better step for security. Just make sure you use something that doesn’t sync in the cloud. That’s not secure enough. Most password managers also have 2FA capability, which is a great choice.

The BEST option, imo, is using a hardware security key. I use [these Yubikeys](https://www.yubico.com/product/yubikey-5-series/yubikey-5c-nfc/), specifically with NFC capability. This gets your 2FA to be cryptographically secure, and in the case an application only support authenticator apps, Yubico offers an authenticator app to use with your Yubikeys.

### Yubikey Setup
1. Order at least two Yubikeys. One will be your backup key, and one your primary. They will be exact copies of each other. That way, if you lose one, you aren’t locked out of your accounts.
2. Download the Yubikey Manager application for desktop and the Yubico Authenticator application for phone & desktop.
3. Complete the following steps after getting your yubikeys.
4. Open the Yubikey Manager.
5. Plugin your primary Yubikey.
6. Go to Application → FIDO2.
7. Set a 8 digit PIN code for your Yubikey. Some applications will require this to be set for extra security. Once set, unplug the Yubikey.
8. Plugin your backup Yubikey.
9. Repeat the PIN process for your backup Yubikey. Use the same PIN code.=
10. Now you are ready to use your Yubikeys!

### Yubikey Usage
Whenever you want to use your Yubikeys with an application, go to the app’s security settings. The first step should ALWAYS be to turn off SMS 2FA.

If security keys are directly supported, you’ll want to follow the process to add both of your security keys (primary + backup).

If only an authenticator app is supported, make sure you add the OTP to both Yubikeys. Typically this process is done in a few steps.

1. Open the Yubico Authenticator application and insert/scan your yubikey.
2. Scan the QR code from the application security setup.
3. Save it to the Yubikey.
4. Remove the Yubikey if inserted.
5. Insert/scan your backup Yubikey.
6. Scan the QR code from the application security setup.
7. Save it to the Yubikey.
8. Now enter the one time passcode to the application to complete the authenticator setup.
9. Complete!

If you add your Yubikeys as security keys or using the Yubico Authenticator application, you’ll be more secure than just SMS 2FA!

## 📱 Mobile Security
Traditionally, a thief was just interested in your phone to resell it, but now they’ve realized your personal/work data is way more valuable than the phone itself. 

What some motivated criminals do do now: attempt to gain access to your unlocked phone so they can hold your data ransom, blackmail you, steal your crypto, or worse.

Our smart phones are the weakest link, since they’re always with us and can easily be stolen. It is imperative we secure them as much as possible.

Some thoughts:

- The default numeric 4 digit passcodes are simply not secure enough.
- On your iPhone/Android, set an **alphanumeric passcode** - long enough (8 chars min) so that even if a thief is eavesdropping and watching you, it would be unfeasible to try to re-type in later. 
    - This sounds like a hassle, but keep in mind 99% of the time you will use FaceID or TouchID so you wont need to type it in other than when restarting the phone. [read more here](https://support.apple.com/en-us/HT204060)
    - Memorize it and never tell anyone. At least 8 characters long, mixed case, letters, numbers, special characters.
- If you have an iPhone, enable [Stolen Device Protection](https://support.apple.com/en-us/120340)

## 💻 Laptop Security
Some thoughts:
- Use a secure password that is NOT used anywhere else. Should never be typed out anywhere. Memorize it and never tell anyone. At least 8 characters long, mixed case, letters, numbers, special characters.
- [FileVault](https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac) must be enabled for Mac. Other OS's support encrypting the hard drive as well - that's what you really want.
- Enable [Find My for Mac](https://support.apple.com/guide/icloud/intro-to-find-my-mm11a95f979f/1.0/icloud/1.0)

## 🔌 Browser Extensions

Browser extensions may be the one of the most dangerous things for browsers, while also being extremely useful. As extensions are needed and super useful, the main question is how to protect yourself without limiting yourself.

Browser extensions are dangerous because you are essentially letting code written by someone else manipulate what you see and give it access to all the data in your browser (outside of passwords).

Even if the developer is trusted, supply chain attacks happen or if they get phished, malicious code could execute on your computer. See this[Ledger Example](https://x.com/Ledger/status/1735326240658100414) supply chain attack.

To combat:

1. Limit the number of extensions you truly need. Do you need that extension that makes fart noises on click? Probably not, get rid of that!
2. Carefully choose which extensions you give all site access to. **You should choose to enable site access only on click or whitelisted on certain domains.**
3. Things like 1Password are good to have accessing all sites (assuming you are okay with the risk, otherwise can limit to on-click)

## 🛜 Network Connectivity
If you are on untrusted WiFi, like at an airport, cafe, etc, ALWAYS use a VPN to stay secure. You don't know what that network has setup. [Nord VPN](https://nordvpn.com/) is quite good, but there are many others as well.

## 🏡 Home WiFi
Set your home WiFi password to something that is at least 14 characters long and is either a strong mnemonic or randomly generated. People are getting their home WiFi networks sniffed more and more. Also ensure the router password is secure.

## ₿ Crypto Wallets

- Always use a hardware wallet (Ledger or Trezor) to store valuable assets.
- A multi-sig is even better for really valuable assets, but comes with some additional setup.
- If you ever copy/paste a seed phrase into a screen, your wallet is no longer secure.  Crypto whales have gotten hacked via clipboard trojans, basically a virus on their computer that detects seed phrases when copied, and drain your wallets. Using a hardware wallet is a easy way to prevent this.
- Rabby and Metamask were ranked highest in security in 2024. I recommend either of these two wallets, particularly Rabby.
    - [Rabby](https://rabby.io/)
        - Security focused & modern approach to showing an overview of all funds across all EVM chains in one interface with seamless network switching
    - [Metamask](https://metamask.io/)
        - Tried and true, but a bit archaic and has UX bugs quite often