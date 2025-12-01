import { createLogger, transports, format } from 'winston';

const { combine, printf, timestamp } = format;

const timestampFormat = timestamp({
    format: () => {
        const date = new Date();
        const pad = (n: number) => n.toString().padStart(2, '0');

        const day = pad(date.getDate());
        const month = pad(date.getMonth() + 1);
        const year = date.getFullYear();
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());

        return `${day}-${month}-${year} ${hours}:${minutes}`;
    },
});

export const logger = createLogger({
    level: 'info',
    format: combine(
        timestampFormat,
        printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [new transports.Console()],
});
