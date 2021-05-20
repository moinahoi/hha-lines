# HHA-Lines

This project is to provide a simple way of finding out if a certain transportation line is operated by the Hamburger Hochbahn.

Color scheme inspired by https://www.hvv-switch.de/

Every line within the operation of the Hamburger Hochbahn is `green`, otherwise `red` (VHH, S-Bahn).

# Pre-Requisites

Nothing. No seriously: No build tool needed. It's just vanilla javascript and basic HTML plus CSS.

# Retrieving HHA lines

Fetch all HVV lines from GTI (Geofox):

```
GET /gti/public/listLines
```

You can filter HHA lines via JSONPath:
```
$.lines[?(@.carrierNameShort=='Hochbahn')].name
```

Strip unwanted chars and whitespaces.

# Some usefull features

- The size of the input as well as the actual font size is calculcated based on the innerHeight / innerWidth value of the window.
- The font-size uses a new `--vhw` unit which is always the lower of the innerHeight / innerWidth value.
- PWA for offline availability

# What's next

Any suggestions?

