const crypto = require('crypto');

crypto.createCipheriv("DES", key, iv); // Noncompliant

//The following code contains examples of algorithms that are not considered highly resistant to cryptanalysis and thus should be avoided.
