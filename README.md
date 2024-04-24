# mkdocs-thebe

MkDocs plugin to turn Python code snippets into interactive examples via
[thebe](https://github.com/executablebooks/thebe)

## Installation

```sh
pip install mkdocs-thebe
```

## Usage

```yaml
# in your mkdocs.yml
plugins:
  - mkdocs-thebe:
      # endpoint to the server that manages Python processes
      baseUrl: https://endpoint.domain.io
```

```yaml
markdown_extensions:
  - pymdownx.highlight:
      # required!
      pygments_lang_class: true
```