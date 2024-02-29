public class CodeWithBugs {
	private int recursion_infinite(int val) {
		return recursion_infinite(val);
	}

	private void unexpected_runtime_behavior(int val) {
		System.out.printf("%s", val);
	}

	private void zero_denominator() {
		int divisor = 0;
		int quotient = 1 / divisor;
	}

	private void conditionals_new_lines(int val1, int val2) {
		if (val1 > val2)
			val1++;
		else val2++;
	}

	private void non_compliant_namingConvention(String invalid_name) {
		String LocalVariable = "This name is not valid either";
	}
}
