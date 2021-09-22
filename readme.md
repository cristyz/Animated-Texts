
# Animated Texts

  

Hi, this library is a simple javascript text animator

  
  
# Properties
**force**
<br>
type: number
<br>
default: 300

---

**start_delay_time**
<br>
type: number
<br>
default: 250

---

**direction**
<br>
type: array
<br>
default: [ ' x ' , ' y ' ]

---

**animation_duration**
<br>
type: number
<br>
default: 1500

---

**delay_type**
<br>
type: string
<br>
default: 'sequential'
<br>
values: 'none' or 'random' or 'sequential'

---

**random_scale**
<br>
type: number or boolean
<br>
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
