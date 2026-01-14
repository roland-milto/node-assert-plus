[Switch to English](README.md)

# [`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus)

![NPM version](https://img.shields.io/npm/v/@argument-assertions/node-assert-plus?color=blue)
![Typescript project](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![ESM supported](https://img.shields.io/badge/ESM-supported-brightgreen)

## Was ist `node-assert-plus`?

`@argument-assertions/node-assert-plus` ist eine
moderne und sichere **Assertion-Bibliothek**, die von [Roland Milto](https://roland.milto.de/) in TypeScript geschrieben wurde und als
erweiterte Implementierung der in Node integrierten [`node:assert/strict`](https://nodejs.org/api/assert.html) konzipiert ist.

Es handelt sich um einen Fork der ursprünglichen Bibliothek [`assert-plus`](https://www.npmjs.com/package/assert-plus), die nicht mehr
gewartet wird und mehrere Sicherheits- und Leistungsprobleme aufweist. Diese neue Bibliothek aus dem Jahr 2026 ist bis zu **zehnmal schneller**
als das ursprüngliche `assert-plus` und **reduziert** gleichzeitig die CPU- und Speicherauslastung um **50–80 %**.

Es wurden Typüberprüfungen und strenge Primitivprüfungen hinzugefügt und problematische Funktionen wie `caller` entfernt,
um die Kompatibilität mit dem **Strict Mode** sicherzustellen.

Weitere Details:
- [SAFETY.md](SAFETY.md)
- [PERFORMANCE.md](PERFORMANCE.md)

[`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus) vereinfacht
das Testen durch eine breite Palette an gebrauchsfertigen Assertions. Ein einfaches Beispiel:

```js
import { assert } from '@argument-assertions/node-assert-plus';

process.env.NODE_ENV = 'development';

function checkAccountDetails(options, callback)
{
  assert.plainObject(options, 'options');
  assert.integer(options.id, 'options.id');
  assert.string(options.name, 'options.name');
  assert.arrayOfString(options.email, 'options.email');
  assert.object(options.dateObject, 'options.dateObject');
  assert.boolean(options.isManager, 'options.isManager');
  assert.number(options.process, 'options.process');
  assert.function(callback, 'callback');

  // Do whatever you want with the account details!
  callback(null, {});
}
```

<br>

## Was ist auch neu?

### Sechsunddreißig neue Assertions
| Type check             | Optional checks                | Check items in an isArray     | Check items in an isArray (optional)  |
|------------------------|--------------------------------|-------------------------------|---------------------------------------|
| assert.bigInt          | assert.optionalBigInt          | assert.arrayOfBigInt          | assert.optionalArrayOfBigInt          |
| assert.integer         | assert.optionalInteger         | assert.arrayOfInteger         | assert.optionalArrayOfInteger         |
| assert.null            | assert.optionalNull            | assert.arrayOfNull            | assert.optionalArrayOfNull            |
| assert.nullOrUndefined | assert.optionalNullOrUndefined | assert.arrayOfNullOrUndefined | assert.optionalArrayOfNullOrUndefined |
| assert.plainObject     | assert.optionalPlainObject     | assert.arrayOfPlainObject     | assert.optionalArrayOfPlainObject     |
| assert.promise         | assert.optionalPromise         | assert.arrayOfPromise         | assert.optionalArrayOfPromise         |
| assert.symbol          | assert.optionalSymbol          | assert.arrayOfSymbol          | assert.optionalArrayOfSymbol          |
| assert.undefined       | assert.optionalUndefined       | assert.arrayOfUndefined       | assert.optionalArrayOfUndefined       |
| assert.ValidDate       | assert.optionalValidDate       | assert.arrayOfValidDate       | assert.optionalArrayOfValidDate       |

### Aliase für `bool`, `func` und `regexp`

Die folgenden Aliase wurden zu den bestehenden Assertions hinzugefügt und können anstelle der ursprünglichen Namen verwendet werden.

#### Erzwungen (Wert muss existieren)
| New method alias  | Original        | - | New array-method alias   | Original                |
|-------------------|-----------------|---|--------------------------|-------------------------|
| `assert.boolean`  | `assert.bool`   | - | `assert.arrayOfBoolean`  | `assert.arrayOfBool`    |
| `assert.function` | `assert.func`   | - | `assert.arrayOfFunction` | `assert.arrayOfFunc`    |
| `assert.regEx`    | `assert.regexp` | - | `assert.arrayOfRegEx`    | `assert.arrayOfRegexp`  |

#### Optional (Wert kann `undefined` oder `null`)
| New method alias          | Original                | - | New array-method alias           | Original                       |
|---------------------------|-------------------------|---|----------------------------------|--------------------------------|
| `assert.optionalBoolean`  | `assert.optionalBool`   | - | `assert.optionalArrayOfBoolean`  | `assert.optionalArrayOfBool`   |
| `assert.optionalFunction` | `assert.optionalFunc`   | - | `assert.optionalArrayOfFunction` | `assert.optionalArrayOfFunc`   |
| `assert.optionalRegEx`    | `assert.optionalRegexp` | - | `assert.optionalArrayOfRegEx`    | `assert.optionalArrayOfRegexp` |

<br>

## Legacy-Projekte

Für Legacy-Codebasen, die noch auf [`assert-plus`](https://www.npmjs.com/package/assert-plus) basieren,  
kann [`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus)
als kompatibler Ersatz verwendet werden.

Für neue Projekte, die eine stabile Assertion-Bibliothek mit erweitertem Funktionsumfang erfordern,  
sollten Sie die Verwendung von [`@type-check/assertions`](https://www.npmjs.com/package/@type-check/assertions) in Betracht ziehen.

Es bietet ein modernes und sicheres Design, einen größeren Funktionsumfang,
eine minimale Bundle-Größe, ist einfach zu verwenden und gut dokumentiert.

Das veraltete `process.env.NODE_NDEBUG` wurde durch das moderne `process.env.NODE_ENV` ersetzt.
Dies muss in Ihrem Code entsprechend angepasst werden.

<br>

## Wie ist `@argument-assertions/node-assert-plus` zu verwenden?

### Installation über die Kommandozeile

```bash
npm install @argument-assertions/node-assert-plus
```

### package.json

Stelle sicher, dass `@argument-assertions/node-assert-plus` in Deine `package.json`-Abhängigkeiten aufgenommen ist und immer die neueste
Version verwendet wird:

```json
{
	"dependencies": {
		"@argument-assertions/node-assert-plus": "*"
	}
}
```

### tsconfig.json

Da `@argument-assertions/node-assert-plus` als ESM-Modul exportiert wird, ist es erforderlich,
die Option `moduleResolution` in der `tsconfig.json`-Datei anzupassen,
um Fehlermeldungen durch den TypeScript-Compiler zu vermeiden:

```json
{
	"compilerOptions": {
		"moduleResolution": "NodeNext"
	}
}
```

### Importieren

Verwenden Sie `@argument-assertions/node-assert-plus` als lokalen Import:

```js
import { assert } from "@argument-assertions/node-assert-plus";
```

Verwenden Sie `@argument-assertions/node-assert-plus` als globalen Import, sodass Sie es *nur einmal* in Ihr Projekt einbinden müssen:

```js
import "@argument-assertions/node-assert-plus/register-global";
```

### Verwendung
Bei allen Methoden, die *nicht* Teil der Kern-API `assert` von Node sind, wird davon ausgegangen, dass sie den zu validierenden **Wert** gefolgt von einer
Zeichenfolge **label** entgegennehmen, z. B. `assert.FUNCTIONNAME(value, label)`.
Diese Bezeichnung wird nicht als Meldung interpretiert.

```js
process.env["NODE_ENV"] = 'development';          // Kann jede *beliebige* Zeichenkette zum aktivieren des Strikt-Modus sein

assert.integer(42, "my integer success label");   // Erfolg
assert.string("foo", "my string success label");  // Erfolg

assert.integer(42.4, "my integer failure label"); // Fehler, vielleicht sollte es eine einfache Zahl sein? ;)
assert.string(54545, "my string failure label");  // Fehler

let strings = ['Roland', 'Milto', 'from', 'Germany'];
assert.arrayOfString(strings, 'good strings');    // Erfolg

strings.push(42);
assert.arrayOfString(strings, 'bad strings');     // Fehler

process.env["NODE_ENV"] = 'production'            // Setze auf 'production' um den Strikt-Modus zu beenden

assert.plainObject(new Date(), "date");           // Das hier wird im Produktions-Modus ignoriert
```

Am besten steuern Sie den Entwicklungsmodus über die Umgebungsvariablen des
Code-Editors (z. B. WebStorm, Visual Studio Code usw.).

Es reicht aus, `process.env.NODE_ENV` nicht zu setzen, damit der Produktionsmodus erkannt wird.
Assertions können jederzeit mit `process.env.["NODE_ENV"] = "production"` deaktiviert werden.
Jeder Wert in `process.env.NODE_ENV` aktiviert den Modus.

### Wie sieht es aus, wenn eine Bedingung nicht erfüllt ist?

```js
let meaningOfLife = 42.4;
assert.integer(meaningOfLife, "meaningOfLife label");
```

Dies schlägt fehl, da *42.4* keine ganze Zahl ist.
Die Ausgabe ist ein `AssertionError` mit der folgenden Meldung:

```bash
AssertionError [ERR_ASSERTION]: At "meaningOfLife label" type of "integer" is required.
at new AssertionError (node:internal/assert/assertion_error:369:5)
at toss (file:///C:/@argument-assertions/node-assert-plus/dist/utils/toss.js:19:11)
at Object.integer (file:///C:/@argument-assertions/node-assert-plus/dist/caller/typeCheck.js:88:13)
at file:///C:/@argument-assertions/node-assert-plus/tests/test.mjs:11:8
at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:547:26)
at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5) {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: 'number',
  expected: 'integer',
  operator: '==='
}
```

<br>

## Methoden

### Erforderliche Assertions

| Einzelwertprüfung                      | Array-Prüfung                                 | Kurzbeschreibung                                  |
|----------------------------------------|-----------------------------------------------|---------------------------------------------------|
| `assert.array(value, label)`           | `assert.arrayOfArray(array, label)`           | Prüft, ob Wert(e) ein Array sind.                 |
| `assert.bigint(value, label)`          | `assert.arrayOfBigInt(array, label)`          | Prüft, ob Wert(e) ein BigInt sind.                |
| `assert.boolean(value, label)`         | `assert.arrayOfBoolean(array, label)`         | Prüft, ob Wert(e) ein Boolean sind.               |
| `assert.bool(value, label)`            | `assert.arrayOfBool(array, label)`            | Alias für die Boolean-Prüfung.                    |
| `assert.buffer(value, label)`          | `assert.arrayOfBuffer(array, label)`          | Prüft, ob Wert(e) ein Buffer sind.                |
| `assert.date(value, label)`            | `assert.arrayOfDate(array, label)`            | Prüft, ob Wert(e) ein Date-Objekt sind.           |
| `assert.finite(value, label)`          | `assert.arrayOfFinite(array, label)`          | Prüft, ob Wert(e) eine endliche Zahl sind.        |
| `assert.function(value, label)`        | `assert.arrayOfFunction(array, label)`        | Prüft, ob Wert(e) eine Funktion sind.             |
| `assert.func(value, label)`            | `assert.arrayOfFunc(array, label)`            | Alias für die Funktions-Prüfung.                  |
| `assert.integer(value, label)`         | `assert.arrayOfInteger(array, label)`         | Prüft, ob Wert(e) eine Ganzzahl sind.             |
| `assert.null(value, label)`            | `assert.arrayOfNull(array, label)`            | Prüft, ob Wert(e) exakt `null` sind.              |
| `assert.nullOrUndefined(value, label)` | `assert.arrayOfNullOrUndefined(array, label)` | Prüft, ob Wert(e) `null` oder `undefined` sind.   |
| `assert.number(value, label)`          | `assert.arrayOfNumber(array, label)`          | Prüft, ob Wert(e) eine Zahl sind.                 |
| `assert.object(value, label)`          | `assert.arrayOfObject(array, label)`          | Prüft, ob Wert(e) ein Objekt sind.                |
| `assert.plainObject(value, label)`     | `assert.arrayOfPlainObject(array, label)`     | Prüft, ob Wert(e) ein einfaches Objekt ({}) sind. |
| `assert.promise(value, label)`         | `assert.arrayOfPromise(array, label)`         | Prüft, ob Wert(e) ein Promise sind.               |
| `assert.regexp(value, label)`          | `assert.arrayOfRegexp(array, label)`          | Prüft, ob Wert(e) ein regulärer Ausdruck sind.    |
| `assert.regEx(value, label)`           | `assert.arrayOfRegEx(array, label)`           | Alias für die Regexp-Prüfung.                     |
| `assert.stream(value, label)`          | `assert.arrayOfStream(array, label)`          | Prüft, ob Wert(e) ein Stream sind.                |
| `assert.string(value, label)`          | `assert.arrayOfString(array, label)`          | Prüft, ob Wert(e) ein String sind.                |
| `assert.symbol(value, label)`          | `assert.arrayOfSymbol(array, label)`          | Prüft, ob Wert(e) ein Symbol sind.                |
| `assert.undefined(value, label)`       | `assert.arrayOfUndefined(array, label)`       | Prüft, ob Wert(e) exakt `undefined` sind.         |
| `assert.uuid(value, label)`            | `assert.arrayOfUuid(array, label)`            | Prüft, ob Wert(e) eine gültige UUID sind.         |
| `assert.validDate(value, label)`       | `assert.arrayOfValidDate(array, label)`       | Prüft, ob Wert(e) ein gültiges Date-Objekt sind.  |

### Optionale Assertions

| Einzelwertprüfung (optional)                   | Array-Prüfung (optional)                              | Kurzbeschreibung                                          |
|------------------------------------------------|-------------------------------------------------------|-----------------------------------------------------------|
| `assert.optionalArray(value, label)`           | `assert.optionalArrayOfArray(array, label)`           | Prüft optional, ob Wert(e) ein Array sind.                |
| `assert.optionalBigInt(value, label)`          | `assert.optionalArrayOfBigInt(array, label)`          | Prüft optional, ob Wert(e) ein BigInt sind.               |
| `assert.optionalBoolean(value, label)`         | `assert.optionalArrayOfBoolean(array, label)`         | Prüft optional, ob Wert(e) ein Boolean sind.              |
| `assert.optionalBool(value, label)`            | `assert.optionalArrayOfBool(array, label)`            | Alias für die optionale Boolean-Prüfung.                  |
| `assert.optionalBuffer(value, label)`          | `assert.optionalArrayOfBuffer(array, label)`          | Prüft optional, ob Wert(e) ein Buffer sind.               |
| `assert.optionalDate(value, label)`            | `assert.optionalArrayOfDate(array, label)`            | Prüft optional, ob Wert(e) ein Date-Objekt sind.          |
| `assert.optionalFinite(value, label)`          | `assert.optionalArrayOfFinite(array, label)`          | Prüft optional, ob Wert(e) eine endliche Zahl sind.       |
| `assert.optionalFunction(value, label)`        | `assert.optionalArrayOfFunction(array, label)`        | Prüft optional, ob Wert(e) eine Funktion sind.            |
| `assert.optionalFunc(value, label)`            | `assert.optionalArrayOfFunc(array, label)`            | Alias für die optionale Funktions-Prüfung.                |
| `assert.optionalInteger(value, label)`         | `assert.optionalArrayOfInteger(array, label)`         | Prüft optional, ob Wert(e) eine Ganzzahl sind.            |
| `assert.optionalNull(value, label)`            | `assert.optionalArrayOfNull(array, label)`            | Prüft optional, ob Wert(e) exakt `null` sind.             |
| `assert.optionalNullOrUndefined(value, label)` | `assert.optionalArrayOfNullOrUndefined(array, label)` | Prüft optional, ob Wert(e) `null` oder `undefined` sind.  |
| `assert.optionalNumber(value, label)`          | `assert.optionalArrayOfNumber(array, label)`          | Prüft optional, ob Wert(e) eine Zahl sind.                |
| `assert.optionalObject(value, label)`          | `assert.optionalArrayOfObject(array, label)`          | Prüft optional, ob Wert(e) ein Objekt sind.               |
| `assert.optionalPlainObject(value, label)`     | `assert.optionalArrayOfPlainObject(array, label)`     | Prüft optional, ob Wert(e) ein einfaches Objekt sind.     |
| `assert.optionalPromise(value, label)`         | `assert.optionalArrayOfPromise(array, label)`         | Prüft optional, ob Wert(e) ein Promise sind.              |
| `assert.optionalRegexp(value, label)`          | `assert.optionalArrayOfRegexp(array, label)`          | Prüft optional, ob Wert(e) ein regulärer Ausdruck sind.   |
| `assert.optionalRegEx(value, label)`           | `assert.optionalArrayOfRegEx(array, label)`           | Alias für die optionale Regexp-Prüfung.                   |
| `assert.optionalStream(value, label)`          | `assert.optionalArrayOfStream(array, label)`          | Prüft optional, ob Wert(e) ein Stream sind.               |
| `assert.optionalString(value, label)`          | `assert.optionalArrayOfString(array, label)`          | Prüft optional, ob Wert(e) ein String sind.               |
| `assert.optionalSymbol(value, label)`          | `assert.optionalArrayOfSymbol(array, label)`          | Prüft optional, ob Wert(e) ein Symbol sind.               |
| `assert.optionalUndefined(value, label)`       | `assert.optionalArrayOfUndefined(array, label)`       | Prüft optional, ob Wert(e) exakt `undefined` sind.        |
| `assert.optionalUuid(value, label)`            | `assert.optionalArrayOfUuid(array, label)`            | Prüft optional, ob Wert(e) eine gültige UUID sind.        |
| `assert.optionalValidDate(value, label)`       | `assert.optionalArrayOfValidDate(array, label)`       | Prüft optional, ob Wert(e) ein gültiges Date-Objekt sind. |


### Strict Node.js assertions

Zusätzlich zu diesen Prüfungen stehen alle von `node:assert/strict` bereitgestellten Methoden zur Verfügung, z. B.:

* [assert.deepEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertdeepequalactual-expected-message)
* [assert.deepStrictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message)
* [assert.doesNotMatch(string, regexp\[, message\])](https://nodejs.org/api/assert.html#assertdoesnotmatchstring-regexp-message)
* [assert.doesNotReject(asyncFn\[, error\]\[, message\])](https://nodejs.org/api/assert.html#assertdoesnotrejectasyncfn-error-message)
* [assert.doesNotThrow(fn\[, error\]\[, message\])](https://nodejs.org/api/assert.html#assertdoesnotthrowfn-error-message)
* [assert.equal(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertequalactual-expected-message)
* [assert.fail(\[message\])](https://nodejs.org/api/assert.html#assertfailmessage)
* [assert.ifError(value)](https://nodejs.org/api/assert.html#assertiferrorvalue)
* [assert.match(string, regexp\[, message\])](https://nodejs.org/api/assert.html#assertmatchstring-regexp-message)
* [assert.notDeepEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertnotdeepequalactual-expected-message)
* [assert.notDeepStrictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertnotdeepstrictequalactual-expected-message)
* [assert.notEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertnotequalactual-expected-message)
* [assert.notStrictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertnotstrictequalactual-expected-message)
* [assert.ok(value\[, message\])](https://nodejs.org/api/assert.html#assertokvalue-message)
* [assert.rejects(asyncFn\[, error\]\[, message\])](https://nodejs.org/api/assert.html#assertrejectsasyncfn-error-message)
* [assert.strictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertstrictequalactual-expected-message)
* [assert.throws(fn\[, error\]\[, message\])](https://nodejs.org/api/assert.html#assertthrowsfn-error-message)
* [assert.partialDeepStrictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertpartialdeepstrictequalactual-expected-message)

<br>

## Unterstützung
Wenn Sie ebenfalls einen Beitrag zur Bibliothek leisten möchten, sind Sie herzlich dazu eingeladen.
Informationen dazu finden Sie unter [CONTRIBUTING.md](CONTRIBUTING.md).
Sie werden auch in der Datei [AUTHORS.md](AUTHORS.md) erwähnt.