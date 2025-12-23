# Sicherheit (Runtime & Compile-Time)
Hier hat sich neben der Performance die größte qualitative Verbesserung ergeben.

### Eliminierung von `caller`
Die alte Version nutzte caller, was im "Strict Mode" (Standard in modernem TS/JS) zu Abstürzen führt.
Die neue Version ist Runtime-Safe.

### Strikte Primitiv-Checks
Die Nutzung von `Number.isFinite` und `Number.isNaN` statt der globalen Funktionen verhindert fatale Fehlentscheidungen 
bei impliziten Typumwandlungen (z. B. war `isFinite(" ")` früher `true`, was falsch ist).

### Type Guarding & Assertions
Durch die Einführung von TypeScript gibt es nun Typsicherheit bei allen Argumenten.
Auch dank `asserts arg is T` "versteht" der Compiler den Check.
Ein Fehler wie `x.toLowerCase()` auf einem potenziellen `null`-Wert wird schon beim Tippen im Editor markiert.

### UUID-Sicherheit
Die explizite Prüfung und der Verzicht auf komplexe, rückwärtsgewandte Regex-Patterns minimieren das Risiko 
von ReDoS (Regular Expression Denial of Service).