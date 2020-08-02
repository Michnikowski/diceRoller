1. Please write a script called `dice_roller.js`. When launched using shell (`node dice_roller.js`) it should display a randomly generated number from 1-20 range. Imagine this as rolling a twenty sided dice (k20).

2. In this iteration, running the `dice_roller.js` should return 5 randomly generated numbers (five dice rolls).
However, the script should obtain the set by initially generating 7 dice rolls and excluding the highest and the lowest ones! It is extremely important not to change the order of the numbers.

Additional comments:
- remove from set first (on the left in the array) minimum and maximum value

3. The script should generate the sets until it meets the following criteria: 
  - the sum of the 5 randomly generated numbers is higher or equal to 55. Returning a set which doesn't sum up to at least 55, is not valid.
  - however, the rolls dropped by satisfying specification in the point 2) should not count to the `at least 55 rule`!

Additional comments:
- don't use rules from point 2
- generate only 5 numbers

4. In this iteration we would like to perform additional roll, which would be appended to the set as last. Again, this should not count for the `at least 55 rule`.

Additional comments:
- don't use rules from point 2, 3
- generate only 5 or 6 numbers if first arg true provided

5. Before performing the roll specified in the point 2) generate a random number from within 1 - 30 range (i.e., roll a k30):
   - if the result is contained within the 1-7 range (included), perform another k30 roll.
   - then if the result of additional roll is 1, write a logic which changes the behavior of throwing away the highest and the lowest numbers mentioned in the point 2) to: exclude two lowest numbers from the set.
