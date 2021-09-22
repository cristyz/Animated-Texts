
# Animated Texts

  

Hi, this library is a simple javascript text animator

  
  
# Properties
**force**
type: number
default: 300

---

**start_delay_time**
type: number
default: 250

---

**direction**
type: array
default: [ ' x ' , ' y ' ]

---

**animation_duration**
type: number
default: 1500

---

**delay_type**
type: string
default: 'sequential'
values: 'none' or 'random' or 'sequential'

---

**random_scale**
type: number or boolean
default: false

---

# Functions

  

### WordsRandomPlaces

  

```
WordsRandomPlaces({
	element: ".animated__text",
	start_delay_time: 250, //default 250
	delay_type: "sequential", //default sequential
	animation_duration: 1000, //default 1000
	force: 200, //default 300
	direction: ['x', 'y'], //default ['x', 'y']
	random_scale: true, //default false
})
```

  

### LettersRandomPlaces

  

```
LettersRandomPlaces({
	element: ".animated__text",
	start_delay_time: 250, //default 1000
	delay_type: "sequential", //default sequential
	animation_duration: 2000, //default 250
	force: 100, //default 300
	direction: ['x', 'y'], //default ['x', 'y']
	random_scale: true, //default false
})
```