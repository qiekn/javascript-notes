const age = 18;

// It's strict, because it does not perform type coericion.
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == "18") console.log("You just became an adult :D (loose)");
