# OSRS Logs Services

[![build status][build-badge]](LICENSE)
[![coverage][coverage-badge]](LICENSE)
[![license][license-badge]](LICENSE)

The backend RESTful API service for [osrslogs.com](https://osrslogs.com).

## API

### Players

| Method   | Endpoint       | Description              | Note               |
| -------- | -------------- | ------------------------ | ------------------ |
| `GET`    | `/players`     | Get all players          |
| `POST`   | `/players`     | Add a new player         |
| `GET`    | `/players/:id` | Get a specific player    |
| `PATCH`  | `/players/:id` | Update a specific player |
| `DELETE` | `/players/:id` | Delete a specific player | Req. authorization |

## Contributing

See the [CONTRIBUTING](CONTRIBUTING.md) file for details.

## License

This project is licensed under the GNU Afferno General Public v3.0 License - see the [LICENSE](LICENSE) file for details.

[build-badge]: https://img.shields.io/github/workflow/status/osrslogs/osrs-services/CI/master
[build]: https://github.com/osrslogs/osrs-hiscores/actions?query=branch%3Amaster
[coverage-badge]: https://img.shields.io/codecov/c/github/osrslogs/osrs-services/master
[coverage]: https://codecov.io/github/osrslogs/osrs-services/branch/master
[license-badge]: https://img.shields.io/badge/license-AGPL--3.0-blue
[license]: LICENSE
