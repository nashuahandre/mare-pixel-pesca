# Maré Pixel: Pesca da Nazaré

A simple classroom browser game made with HTML, CSS and JavaScript.

Students create pixel art for fish, sea objects, trash, backgrounds and UI.

## How to play

Move the mouse to control the fishing hook.

Each game lasts 2 minutes.

Catch fish to gain points.

Avoid jellyfish.

Trash gives no points.

Jellyfish shock the hook and remove points. The shock duration is set in `game-config.js`.

Some fish can appear as rare shiny versions with inverted colors. Shiny fish give 4x points.

After 30 seconds and more than 200 points, one big fish appears automatically.

The big fish is worth 1000 points. It only bites if the hook is already carrying a fish. Small bait fish make the big fish very likely to escape, and it can still escape right before being collected. When it escapes, it returns to the sea instead of disappearing.

The shark is a very rare, very fast and large danger. If it hits anything on the hook, it eats it and keeps swimming out of the screen.

At the end, the game shows a summary with only the items that were caught at least once, including fish, shiny fish, trash and jellyfish shocks.

Difficulty increases with time:

- 0-39 seconds: mostly fish, little trash, very few jellyfish.
- 40-79 seconds: more trash and some jellyfish.
- 80+ seconds: many trash items and jellyfish.

## Technology

- HTML
- CSS
- JavaScript
- Canvas

No install, no local server, no accounts, no database.

## Game variables

Edit `game-config.js` to change points, speeds, probabilities, shiny rarity, difficulty timing, shark size, jellyfish shock duration and big fish escape chances.

## Project files

- `index.html`: page structure.
- `style.css`: page and overlay styles.
- `game-config.js`: easy-to-edit game variables.
- `game.js`: game rules, movement, collisions, scoring and final summary data.
- `game-draw.js`: temporary Canvas drawings and final summary drawing.

## Student art

The game tries to use student PNG files from the `assets` folder.

If the `image` field in `game-config.js` points to a PNG that exists, the game draws that image. If it does not exist, the game uses the temporary Canvas placeholder, so the project never breaks.

The current default image names are:

- `fisherman.png`
- `cliffs.png`
- `sardinha.png`
- `carapau.png`
- `robalo.png`
- `polvo.png`
- `lula.png`
- `peixe_grande.png`
- `tubarao.png`
- `alforreca.png`
- `garrafa.png`
- `bota.png`

Recommended art rules:

- Use PNG files.
- Transparent background is best.
- Draw fish facing right. The game flips them automatically when they swim left.
- Use simple file names with no spaces or accents.

To add a new fish, add a new object inside `fish` in `game-config.js` and give it an image:

```js
{
  name: "Dourada",
  points: 25,
  color: "#f2d36b",
  image: "dourada.png",
  chance: 12,
  shinyChance: 0.015,
  width: 90,
  height: 38,
  speedMin: 1.1,
  speedMax: 2.8
}
```

Then upload `dourada.png` to the `assets` folder.
