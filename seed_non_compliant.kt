import java.security.SecureRandom

val sr = SecureRandom()
sr.setSeed(123456L) // Noncompliant
val v = sr.nextInt()

//The following code uses a cryptographically strong random number generator to generate data that is not cryptographically strong.
