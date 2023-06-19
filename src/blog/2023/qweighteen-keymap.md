---
layout: layouts/base.njk
title: An introduction to my keymap 'Qweighteen'
description: The keymap that I use for my keyboard to get stuff done. The halfway point between 34 and 18 keys.
date: 2023-06-19
socialImage: /images/social/qweighteen.jpg
tags:
  - blogpost
  - keyboard
  - keymap
  - productivity
  - ergonomics
---

# {{title}}

The last several years I've messed around with mechanical keyboards, ergonomic keyboards, and designing my own keymaps. The current state of this journey is that I've settled down on a 38-key keyboard (the [Geist Totem](https://github.com/GEIGEIGEIST/TOTEM)), on which I only use 32 keys. The main focus of the keymap is the 18 keys that are the most comfortable to type on for me.

The name Qweighteen is a combination of 'qwerty' and 'eighteen'. The keymap lets me use a full `QWERTY` layout while getting used to an 18-key layout on the non-base layers. The idea is to have as little finger travel as possible while still using a base layer (qwerty layout) that I'm familiar with.

It's sort of a halfway point between [an 18-key keyboard](https://github.com/benvallack/zmk-config-piano) and a more 'normal' ergonomic setup of 34 keys.

## The keymap

This is the visual representation of the keymap and a picture of the hardware I'm using.

[![The Qweighteen keymap](/images/keymap/keymap-qweighteen.png)](/images/keymap/keymap-qweighteen.png)

*Click the keymap to enlarge*

![The Totem keyboard](/images/keymap/totem.jpg)

To explore the source of the QMK keymap, go to [my dotfile repository](https://github.com/reinier/dotfiles/tree/main/totem).

## Why the Totem keyboard?

The Geist Totem has a nice stagger, a usable splay, it's split into two parts and has low profile keys. I can use the very light [Kailh Choc Pink](https://splitkb.com/products/kailh-low-profile-choc-switches) switches on the keyboard.

The keyboard that I have in front of me is build by the lovely people of [keeb.supply](https://keeb.supply/), a mechanical keyboard shop in Germany. It's build quality is fantastic and I also use it on the road.

The keycaps that I currently use are the [MBK WOG keycaps](https://keeb.supply/products/mbk-wog-keycaps).

After trying a couple of keyboards over the years (ZSA Moonlander, Boardsource Technik and Microdox, and a couple of Keychrons), I've settled on this one as my daily driver.

## Why only 32 keys? The Totem has 38!

While I provide a function to all the 38 keys on the keyboard, I only need and want to use 32 keys on the base layer. The `;` and the `/` keys are on a symbols layer and I've moved the `p` key to the default right pinky position. All that is left are four thumb keys, dedicated keys for the alphabet and the `,` and `.` keys.

## What about those 18 keys on the non-base layers?

![Keymap of the 18 comfortable keys to type on](/images/keymap/18-keys.jpg)

Except for the base layer I only use 18 keys. It feels extremely comfortable to use only one pinky key per hand and only two keys for the other fingers. Ultimately I would like to be productive with a full 18 key setup, including the base layer. To prepare for that, this is my current compromise.

My inspiration for only using 18 keys is [Ben Vallack who explains his setup in this video](https://www.youtube.com/watch?v=5RN_4PQ0j1A&t=8s) (he uses only 16 keys in the video, but he since [moved to 18 keys](https://www.youtube.com/watch?v=NAUxTR4vGys)). He convinced me that going to around 18 keys is pretty doable and far more comfortable when typing then a 'normal' keyboard. It only takes some time getting used to.

## Highlights from the keymap

### Base layer

![Keymap with layer switching keys highlighted](/images/keymap/base-layer-switching.jpg)

Layer switching is always temporary except for the `extend` layer. To access a layer, hold the corresponding key. Beside temporarily activating the extend layer you can also switch to and lock the layer by tapping the `U`, `I` and `O` keys simultaneously (combo).

![Keymap with modifier keys highlighted](/images/keymap/base-modifiers.jpg)

Modifiers are available as hold options on upper row. I have dedicated thumb keys for shift (right hand) and command (left hand, to use with mouse on right). On the hand without the dedicated thumb modifier, the modifier is available on the upper row for the index finger.

![Keymap with thumb keys highlighted](/images/keymap/base-thumbkeys.jpg)

I use `shift` a lot (I write more then I program), so that's why it's the default right thumb key.

Complete overview of the four thumb keys, from left tom right:

- *Command* on hold, one shot Command on tap
- *Spacebar* on tap, hyperkey on hold (actually a meh-key) used for window management with [Amethyst](https://ianyh.com/amethyst/)
- *Shift* on hold, one shot Shift on tap
- *Leader key* (F19) to activate apps and run commands with [Hammerspoon](http://www.hammerspoon.org/)

### Symbols layer

![Keymap with layer switching keys highlighted](/images/keymap/symbols-emoji.jpg)

On the first symbols layer the symbols are more focussed on writing. On the second layer the symbols are more focussed on programming.

The `shift + F19` key is to open the emoji window. I use [Keyboard Maestro](https://www.keyboardmaestro.com/main/) for different kinds of mappings and scripting, including this one.

### Numbers layer

![Keymap with layer switching keys highlighted](/images/keymap/numbers.jpg)

With this layout it's easy to reach the most frequently used numbers while still having it mapped in an intuitive way.

Pressing the pinky to access this layer is not ideal. Still figuring out an elegant solution to this.

### Extend layer

![Keymap with extend layer highlighted](/images/keymap/extend.jpg)

I use this layer to navigate with the arrows and to press tab, enter, escape, and backspace. More things this layer is capable of:

- `F18` is mapped to my screenshot tool
- `F17` and `F20` are available for scripting purposes
- Combos on right hand to press mouse buttons. Comes in handy when using the trackpad with my left hand.
- Extra `alt`-key to easily activate when navigating with arrow keys on left middle finger.
- `Caps Word` is a more usable alternative for Capslock where you only type one word in all caps and then the keyboard automatically switched back to lowercase. It's a [native feature of QMK](https://github.com/qmk/qmk_firmware/blob/master/docs/feature_caps_word.md) nowadays.
- With the `CP` key you can absorb a digital object and spit it out again. It's copy paste in one single key. Hold for copy, tap for paste.
- `DEL` key on left hand to use in tandem with a mouse on the right hand.

## Now what?

My journey with keyboards and keymaps will continue. My next step would probably be introducing a mouse layer and thinking about a more comfortable switch to the numbers layer. The big step forward will be an 18-key keyboard for which I have made a prototype already by stripping my Microdox down to 18 keys. 


