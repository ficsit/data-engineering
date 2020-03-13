#ue4Pak

ue4pak can be downloaded [here](https://github.com/Vilsol/ue4pak/releases) and should be added to this folder as
"ue4pak".

The individual files can be generated as such:

- buildable.json:
  - `ue4pak.exe --pak ".\FactoryGame-WindowsNoEditor.pak" extract --pretty -a "FactoryGame/Content/FactoryGame/Buildable/\*Desc_\*","FactoryGame/Content/FactoryGame/Buildable/\*/Build_\*" -o buildable.json`
- schematics.json:
  - `ue4pak.exe --pak ".\FactoryGame-WindowsNoEditor.pak" extract --pretty -a "FactoryGame/Content/FactoryGame/Schematics\*" -o schematics.json`
- resources.json:
  - `ue4pak.exe --pak ".\FactoryGame-WindowsNoEditor.pak" extract --pretty -a "FactoryGame/Content/FactoryGame/Resource\*" -o resources.json`
- recipes.json:
  - `ue4pak.exe --pak ".\FactoryGame-WindowsNoEditor.pak" extract --pretty -a "FactoryGame/Content/FactoryGame/Recipes\*" -o recipes.json`
