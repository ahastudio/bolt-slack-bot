# Slack Bot with Bolt

Bolt for JavaScript: <https://slack.dev/bolt-js>

Apps: <https://api.slack.com/apps>

Scopes:

- `chat:write`
- `channels:history`
- `groups:history`

Event Subscriptions > Request URL:
`https://xxx.ngrok.io/slack/events`

Subscribe to bot events:

- `message.channels`
- `message.groups`

API Event Types: <https://api.slack.com/events>

## Generate `.env` file

```bash
cp .env.default .env

# Modify `.env` file to fit your environment!
```

## Install dependencies

```bash
npm install
```

## Lint and fix all

```bash
npm run lint
```

## Run bot server

```bash
npm start
```
