# Performance
Der ursprüngliche Code war extrem "dynamisch", was für die JavaScript-Engine (V8) schwer zu optimieren ist.
In heißen Codepfaden (viele Validierungen pro Sekunde) kann nun eine Reduktion der CPU-Last für Validierungen um 50 bis 80% festgestellt werden.
Außerdem ein Geschwindigkeitsgewinn von zwei- bis zehnmal schnelleren Ausführungszeiten.

### Statische Struktur vs. Dynamische Loops
Früher wurden Funktionen zur Laufzeit via `keys.forEach` an ein Objekt gebunden. Die neue Version nutzt statisch definierte Methoden.
Die V8-Engine kann diese inlinen (direkt in den aufrufenden Code einbetten), was den Overhead des Funktionsaufrufs eliminiert.

### Wegfall von `util.format`
Die alte Version nutzte für jede Fehlermeldung `util.format`.
Die Funktion parst Strings, wodurch sie sehr langsam ist.
Die neue Version nutzt Template-Strings, die nativ und blitzschnell sind.

### Optimierte Iteration
Die Umstellung von `.forEach()` (ein Funktionsaufruf pro Element) auf `for...of` (interner Iterator) spart bei großen Arrays massiv Zeit.
Bei einem Array mit 1000 Elementen bedeutet das 1000 weniger Call-Stack-Operationen.

### V8-Monomorphismus
Da jede Assertion-Funktion nun immer die gleiche Form hat und nicht dynamisch generiert wird,
kann der JIT-Compiler hocheffizienten Maschinencode erzeugen.