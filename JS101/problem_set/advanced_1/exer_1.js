/*
P:
E:
D:
template of string with object literal
adj arr
noun arr
verbs arr
adverbs arr

A:
create var of string with object literal. This is template

C:
*/

function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The ${adjectives[Math.abs(Math.random - 1) * adjectives.length]} brown ${nouns} ${adverbs}
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".