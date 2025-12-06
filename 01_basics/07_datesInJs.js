// Dates

 //   JavaScript Date Notes Summary:

 //     - Use `toLocale...` methods for user-friendly display.
 //     - Use `toISOString()` or `toJSON()` for APIs/databases.
 //     - `getTimezoneOffset()` helps when working with multiple time zones.


let myDate = new Date();

console.log(myDate);                               // Default ISO format → 2025-12-06T20:06:28.936Z
console.log(myDate.toString());                    // Human-readable → Sat Dec 06 2025 21:07:01 GMT+0100 (Central European Standard Time)

console.log(myDate.toJSON());                      // JSON-friendly → 2025-12-06T20:11:37.004Z
console.log(myDate.toDateString());                // Date only → Sat Dec 06 2025
console.log(myDate.toLocaleDateString());          // Local date → 06/12/2025 (Europe)
console.log(myDate.toLocaleTimeString());          // Local time → 21:11:37
console.log(myDate.toISOString());                 // Standard UTC format → 2025-12-06T20:11:37.004Z
console.log(myDate.toLocaleString());              // Local date + time → 06/12/2025, 21:11:37
console.log(myDate.toTimeString());                // Time with timezone → 21:11:37 GMT+0100 (Central European Standard Time)
console.log(myDate.toUTCString());                 // UTC-based string → Sat, 06 Dec 2025 20:11:37 GMT
console.log(myDate.getTimezoneOffset());           // Difference from UTC in minutes → -60 (means local time is 1h ahead of UTC)

console.log(typeof myDate);                        // object of Date

let myBirthDate = new Date(1998,9,14);
console.log(myBirthDate.toDateString());           // Wed Oct 14 1998  -- Year , Month, Day / jan-0


let myCreatedDate = new Date(2025,0,12);
console.log(myCreatedDate.toDateString());         // Sun Jan 12 2025  -- Months start with 0

myCreatedDate = new Date(2025,0,23, 5,3);
console.log(myCreatedDate.toLocaleString());       // 23/01/2025, 05:03:00  -- Jan-0 and may pass time

myCreatedDate = new Date("2025-01-14");      // YYYY-MM-DD
console.log(myCreatedDate.toLocaleString());       // 14/01/2025, 01:00:00  -- Jan-1 and may pass time

myCreatedDate = new Date("10-19-2025");      // MM-DD-YYYY
console.log(myCreatedDate.toLocaleString());       // 19/10/2025, 00:00:00


let myTimeStamp = Date.now();
console.log(myTimeStamp);                          // 1765053411266
console.log(myCreatedDate.getTime());              // 1760824800000

console.log("+++++++++++++++++++++++++");

console.log(Date.now()/1000);                     // 1765053587.919
console.log(Math.floor(Date.now()/1000));      // 1765053672  -- in Decimel

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);              // 12

newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'UTC'
});

/***
 * JavaScript Date Formatting with toLocaleString()
 *
 * Syntax:
 *   date.toLocaleString(locale, options)
 *
 * - locale: e.g. 'en-US', 'de-DE', 'fr-FR'. Use 'default' for system/browser default.
 * - options: object with formatting rules.
 *
 * Common Options:
 *
 * 1. weekday
 *    - 'long'   → "Monday"
 *    - 'short'  → "Mon"
 *    - 'narrow' → "M"
 *
 * 2. year
 *    - 'numeric' → "2025"
 *    - '2-digit' → "25"
 *
 * 3. month
 *    - 'numeric' → "12"
 *    - '2-digit' → "12"
 *    - 'long'    → "December"
 *    - 'short'   → "Dec"
 *    - 'narrow'  → "D"
 *
 * 4. day
 *    - 'numeric' → "6"
 *    - '2-digit' → "06"
 *
 * 5. hour
 *    - 'numeric' → "9"
 *    - '2-digit' → "09"
 *
 * 6. minute
 *    - 'numeric' → "7"
 *    - '2-digit' → "07"
 *
 * 7. second
 *    - 'numeric' → "5"
 *    - '2-digit' → "05"
 *
 * 8. timeZone
 *    - Example: 'UTC', 'Europe/Vienna', 'America/New_York'
 *    - Controls which timezone is used for formatting.
 *
 * 9. timeZoneName
 *    - 'short' → "GMT", "CET"
 *    - 'long'  → "Greenwich Mean Time", "Central European Standard Time"
 *
 * 10. hour12
 *    - true  → 12-hour clock (AM/PM)
 *    - false → 24-hour clock
 *
 * 11. era
 *    - 'long'   → "Anno Domini"
 *    - 'short'  → "AD"
 *    - 'narrow' → "A"
 *
 * 12. fractionalSecondDigits
 *    - 0, 1, 2, or 3 → controls milliseconds precision
 *
 * Example:
 *   let newDate = new Date("2025-12-06T20:11:37Z");
 *
 *   console.log(newDate.toLocaleString('en-US', {
 *     weekday: 'long',
 *     year: 'numeric',
 *     month: 'long',
 *     day: 'numeric',
 *     hour: '2-digit',
 *     minute: '2-digit',
 *     second: '2-digit',
 *     timeZone: 'UTC',
 *     timeZoneName: 'short',
 *     hour12: true
 *   }));
 *
 *   // Output: "Saturday, December 6, 2025, 08:11:37 PM UTC"
 *
 * Summary:
 * - Use locale to control language/region.
 * - Use options to customize which parts of the date/time are shown.
 * - Perfect for user-friendly display in apps/websites.
 */
