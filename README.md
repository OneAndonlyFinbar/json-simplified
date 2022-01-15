# json-simplified
<img src="https://img.shields.io/npm/v/json-simplified?style=for-the-badge"> <script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support My Open Source Project', '#29abe0', 'K3K47LTWF');kofiwidget2.draw();</script> 

Simple JSON Database

Created By: OneAndonlyFinbar<br>
Discord: Finbar#0001<br>
Email: finbar@finbar.xyz<br>
Documentation: https://jsonsimplified.finbar.xyz/ <br>

<hr>

# Quick Start
```
const { Database } = require('json-simplified');
const db = new Database('versionsDatabase');
db.set('version', '1.0');
db.get('version') // 1.0
```

# Simple Usage
```
const db = new Database('DatabaseName', {DatabaseOptions});
db.set('Field/Path', 'Data');
db.get('Field/Path'); // Data

// Using Field Names
db.set('latestVersion', '1');
db.get('latestVersion'); // 1

// Using JSON Paths
db.set('versions.latest', '1');
db.get('versions.latest'); // 1

// Delete data using field name
db.delete('latestVersion');

// Delete Data Using JSON Path
db.delete('versions.latest');

// Destroy database
db.destroy();
```

# Setting Multiple Values
```
db.set('Finbar', {name: 'Finbar', gender: 'male', occupation: 'freelance programmer'});
db.get('users', 'Finbar'); // {name: 'Finbar', gender: 'male', occupation: 'freelance programmer'}
```

# Set And Get From JSON Path
```
db.set('Finbar.name', 'Finbar');
db.set('Finbar.gender', 'Male');
db.set('Finbar.occupation', 'freelance programmer');
db.get('Finbar'); // {name: 'Finbar', gender: 'male', occupation: 'freelance programmer'}
db.get('users', 'Finbar.name'); // Finbar
```
# Database Options

| Option | Type | Description |
| ------ | ---- | ----------- |
| overwriteOld | boolean | Create a new database file, whether or not one exists.
| registry | string | Registry/directory for the database files to be placed in.
