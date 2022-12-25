What is YAML ?
YAML is a data serialization language that is often used for writing configuration files. Depending on whom you ask, YAML stands for yet another markup language or YAML ain’t markup language (a recursive acronym), which emphasizes that YAML is for data, not documents.
previously it was known as "Yet Another Markup Language"
Why YAML ain't Markup Language!!
A markup language is a computer language that uses tags to define elements within a document. It is human-readable, meaning markup files contain standard words, rather than typical programming syntax.
ex:-HTML is very popular markup language!
but YAML isn't works on documentation it's simply a human readable data serialization language so it named as YAML ain't Markup Language.
Data Serialization
Data serialization is the process of converting data objects present in complex data structures into a byte stream for storage, transfer and distribution purposes on physical devices. A real life example you can think of can be sharing the idea of your new project with your friend by sending him/her using e-mails. So, in the above example the process that you have done to describing is serialization and your friend have de-serialized it to get the idea about it.
Serialization enables us to save the state of an object and recreate the object in a new location. Serialization encompasses both the storage of the object and exchange of data. Since objects are composed of several components, saving or delivering all the parts typically requires significant coding effort, so serialization is a standard way to capture the object into a sharable format.
Advantages of using YAML:
•

Simple and Easy to read
•

It's strict syntax provides us surety about proper indentation
•

There are some tool they can convert Yaml to json as well as xml
•

More powerful when representing complex data
•

Parsing is Easy
It is mainly used to write configuration files for Kubernetes, Docker etc. and it helps in maintaining logs and caches of the applications.
Syntax:
•

All YAML files (regardless of their association with Ansible or not) can optionally begin with --- and end with ... This is part of the YAML format and indicates the start and end of a document.
•

Values can span multiple lines using | or >. Spanning multiple lines using a “Literal Block Scalar” | will include the newlines and any trailing spaces. Using a “Folded Block Scalar” > will fold newlines to spaces; it’s used to make what would otherwise be a very long line easier to read and edit. In either case the indentation will be ignored.
•

A dictionary is represented in a simple key: value form (the colon must be followed by a space)
•

Values can span multiple lines using | or >. Spanning multiple lines using a “Literal Block Scalar” | will include the newlines and any trailing spaces. Using a “Folded Block Scalar” > will fold newlines to spaces; it’s used to make what would otherwise be a very long line easier to read and edit.

# DataTypes in YAML:

• string
• integer
• date and time
• floating point numbers
• null
• boolean
• sequences
• maps
• pairs
• sets
• dictionary
