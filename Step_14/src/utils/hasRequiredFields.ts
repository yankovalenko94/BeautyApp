export default function hasRequiredFields(
	obj: Record<string, any>,
	requiredFields: string[]
): boolean {
	return requiredFields.every((field) => {
		return Object.hasOwn(obj, field);
	});
}
