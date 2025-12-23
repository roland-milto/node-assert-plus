[Switch to English](README.md)

# `@argument-assertions/node-assert-plus`

[`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus) ist eine
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

function checkAccountDetails(options, callback) {
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

---

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

---

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

---

## Wie ist `@argument-assertions/node-assert-plus` zu verwenden?

### Installation über die Kommandozeile

```bash
npm install @argument-assertions/node-assert-plus
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
Wenn die Assertion fehlschlägt, wird ein `AssertionError` mit einer Meldung in der folgenden Form ausgelöst:

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

---

## Methodenliste

### Einfache Assertions
- assert.array(argument, message)
- assert.bigint(argument, message)
- assert.boolean(argument, message) *or* assert.bool(argument, message)
- assert.buffer(argument, message)
- assert.date(argument, message)
- assert.finite(argument, message)
- assert.function(argument, message) *or* assert.func(argument, message)
- assert.integer(argument, message)
- assert.null(argument, message)
- assert.nullOrUndefined(argument, message)
- assert.number(argument, message)
- assert.object(argument, message)
- assert.plainObject(argument, message)
- assert.promise(argument, message)
- assert.regexp(argument, message) *or* assert.regEx(argument, message)
- assert.stream(argument, message)
- assert.string(argument, message)
- assert.symbol(argument, message)
- assert.undefined(argument, message)
- assert.uuid(argument, message)
- assert.validDate(argument, message)

### Array Assertions
- assert.arrayOfArray(argument, message)
- assert.arrayOfBigInt(argument, message)
- assert.arrayOfBoolean(argument, message) *or* assert.arrayOfBool(argument, message)
- assert.arrayOfBuffer(argument, message)
- assert.arrayOfDate(argument, message)
- assert.arrayOfFinite(argument, message)
- assert.arrayOfFunction(argument, message) *or* assert.arrayOfFunc(argument, message)
- assert.arrayOfInteger(argument, message)
- assert.arrayOfNull(argument, message)
- assert.arrayOfNullOrUndefined(argument, message)
- assert.arrayOfNumber(argument, message)
- assert.arrayOfObject(argument, message)
- assert.arrayOfPlainObject(argument, message)
- assert.arrayOfPromise(argument, message)
- assert.arrayOfRegexp(argument, message) *or* assert.arrayOfRegEx(argument, message)
- assert.arrayOfStream(argument, message)
- assert.arrayOfString(argument, message)
- assert.arrayOfSymbol(argument, message)
- assert.arrayOfUuid(argument, message)
- assert.arrayOfUndefined(argument, message)
- assert.arrayOfValidDate(argument, message)

### Einfache Assertions (optional)
- assert.optionalArray(argument, message)
- assert.optionalBigInt(argument, message)
- assert.optionalBoolean(argument, message) *or* assert.optionalBool(argument, message)
- assert.optionalBuffer(argument, message)
- assert.optionalDate(argument, message)
- assert.optionalFinite(argument, message)
- assert.optionalFunction(argument, message) *or* assert.optionalFunc(argument, message)
- assert.optionalInteger(argument, message)
- assert.optionalNull(argument, message)
- assert.optionalNullOrUndefined(argument, message)
- assert.optionalNumber(argument, message)
- assert.optionalObject(argument, message)
- assert.optionalPlainObject(argument, message)
- assert.optionalPromise(argument, message)
- assert.optionalRegEx(argument, message) *or* assert.optionalArrayOfRegexp(argument, message)
- assert.optionalStream(argument, message)
- assert.optionalString(argument, message)
- assert.optionalSymbol(argument, message)
- assert.optionalUndefined(argument, message)
- assert.optionalUuid(argument, message)
- assert.optionalValidDate(argument, message)

### Array Assertions (optional)
- assert.optionalArrayOfArray(argument, message)
- assert.optionalArrayOfBigInt(argument, message)
- assert.optionalArrayOfBoolean(argument, message) *or* assert.optionalArrayOfBool(argument, message)
- assert.optionalArrayOfBuffer(argument, message)
- assert.optionalArrayOfDate(argument, message)
- assert.optionalArrayOfFinite(argument, message)
- assert.optionalArrayOfFunction(argument, message) *or* assert.optionalArrayOfFunc(argument, message)
- assert.optionalArrayOfInteger(argument, message)
- assert.optionalArrayOfNull(argument, message)
- assert.optionalArrayOfNullOrUndefined(argument, message)
- assert.optionalArrayOfNumber(argument, message)
- assert.optionalArrayOfObject(argument, message)
- assert.optionalArrayOfPlainObject(argument, message)
- assert.optionalArrayOfPromise(argument, message)
- assert.optionalArrayOfRegEx(argument, message) *or* assert.optionalArrayOfRegexp(argument, message)
- assert.optionalArrayOfStream(argument, message)
- assert.optionalArrayOfString(argument, message)
- assert.optionalArrayOfSymbol(argument, message)
- assert.optionalArrayOfUuid(argument, message)
- assert.optionalArrayOfUndefined(argument, message)
- assert.optionalArrayOfValidDate(argument, message)


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

---

## Unterstützung
Wenn Sie ebenfalls einen Beitrag zur Bibliothek leisten möchten, sind Sie herzlich dazu eingeladen.
Informationen dazu finden Sie unter [CONTRIBUTING.md](CONTRIBUTING.md).
Sie werden auch in der Datei [AUTHORS.md](AUTHORS.md) erwähnt.