declare namespace NodeJS {
	interface ProcessEnv {
		/**
		 * Sentry configuration
		 */
		NEXT_PUBLIC_SENTRY_DSN: string
		NEXT_PUBLIC_SENTRY_ORGANIZATION: string
		NEXT_PUBLIC_SENTRY_PROJECT: string
	}
}
