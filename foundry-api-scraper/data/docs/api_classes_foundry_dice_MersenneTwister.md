# MersenneTwister | Foundry Virtual Tabletop - API Documentation - Version 13

Source: https://foundryvtt.com/api/classes/foundry.dice.MersenneTwister.html

- Preparing search index...
- The search index is not available

- Foundry Virtual Tabletop - API Documentation - Version 13
- foundry
- dice
- MersenneTwister


# Class MersenneTwister

A standalone, pure JavaScript implementation of the Mersenne Twister pseudo random number generator.


##### Index


### Constructors


### Methods


## Constructors


### constructor

- new MersenneTwister(seed?: number): MersenneTwisterInstantiates a new Mersenne Twister.
ParametersOptionalseed: numberThe initial seed value, if not provided the current timestamp will be used.
Returns MersenneTwister
- Optionalseed: numberThe initial seed value, if not provided the current timestamp will be used.

Instantiates a new Mersenne Twister.


#### Parameters

- Optionalseed: numberThe initial seed value, if not provided the current timestamp will be used.

`Optional`The initial seed value, if not provided the current timestamp will be used.


#### Returns MersenneTwister


## Methods


### int

- int(): numberGenerates a random unsigned 32-bit integer.
Returns numberSince0.1.0

Generates a random unsigned 32-bit integer.


#### Returns number


#### Since

0.1.0


### int31

- int31(): numberGenerates a random unsigned 31-bit integer.
Returns numberSince0.1.0

Generates a random unsigned 31-bit integer.


#### Returns number


#### Since

0.1.0


### normal

- normal(mu: number, sigma: number): numberA pseudo-normal distribution using the Box-Muller transform.
Parametersmu: numberThe normal distribution mean
sigma: numberThe normal distribution standard deviation
Returns number
- mu: numberThe normal distribution mean
- sigma: numberThe normal distribution standard deviation

A pseudo-normal distribution using the Box-Muller transform.


#### Parameters

- mu: numberThe normal distribution mean
- sigma: numberThe normal distribution standard deviation

The normal distribution mean

The normal distribution standard deviation


#### Returns number


### random

- random(): numberGenerates a random real in the interval [0;1[ with 32-bit resolution.
Same as .rnd() method - for consistency with Math.random() interface.
Returns numberSince0.2.0

Generates a random real in the interval [0;1[ with 32-bit resolution.

Same as .rnd() method - for consistency with Math.random() interface.


#### Returns number


#### Since

0.2.0


### real

- real(): numberGenerates a random real in the interval [0;1] with 32-bit resolution.
Returns numberSince0.1.0

Generates a random real in the interval [0;1] with 32-bit resolution.


#### Returns number


#### Since

0.1.0


### realx

- realx(): numberGenerates a random real in the interval ]0;1[ with 32-bit resolution.
Returns numberSince0.1.0

Generates a random real in the interval ]0;1[ with 32-bit resolution.


#### Returns number


#### Since

0.1.0


### rnd

- rnd(): numberGenerates a random real in the interval [0;1[ with 32-bit resolution.
Returns numberSince0.1.0

Generates a random real in the interval [0;1[ with 32-bit resolution.


#### Returns number


#### Since

0.1.0


### rndHiRes

- rndHiRes(): numberGenerates a random real in the interval [0;1[ with 53-bit resolution.
Returns numberSince0.1.0

Generates a random real in the interval [0;1[ with 53-bit resolution.


#### Returns number


#### Since

0.1.0


### seed

- seed(seed: number): numberInitializes the state vector by using one unsigned 32-bit integer "seed", which may be zero.
Parametersseed: numberThe seed value.
Returns numberSince0.1.0
- seed: numberThe seed value.

Initializes the state vector by using one unsigned 32-bit integer "seed", which may be zero.


#### Parameters

- seed: numberThe seed value.

The seed value.


#### Returns number


#### Since

0.1.0


### seedArray

- seedArray(vector: array): voidInitializes the state vector by using an array key[] of unsigned 32-bit integers of the specified length. If
length is smaller than 624, then each array of 32-bit integers gives distinct initial state vector. This is
useful if you want a larger seed space than 32-bit word.
Parametersvector: arrayThe seed vector.
Returns voidSince0.1.0
- vector: arrayThe seed vector.

Initializes the state vector by using an array key[] of unsigned 32-bit integers of the specified length. If
length is smaller than 624, then each array of 32-bit integers gives distinct initial state vector. This is
useful if you want a larger seed space than 32-bit word.


#### Parameters

- vector: arrayThe seed vector.

The seed vector.


#### Returns void


#### Since

0.1.0


### Staticnormal

`Static`- normal(...args: any[]): numberA factory method for generating random normal rolls
Parameters...args: any[]Returns number
- ...args: any[]

A factory method for generating random normal rolls


#### Parameters

- ...args: any[]


#### Returns number


### Staticrandom

`Static`- random(): numberA factory method for generating random uniform rolls
Returns number

A factory method for generating random uniform rolls


#### Returns number


### Settings

- Protected
- Inherited
- Internal


### On This Page

