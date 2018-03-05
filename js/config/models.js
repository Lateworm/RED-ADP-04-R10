import Realm from "realm";

const FaveSchema = {
	name: "Fave",
	primaryKey: "id",
	properties: {
		id: "string",
		faved_on: "date"
	}
};

const realm = new Realm({ schema: [FaveSchema] });

// hints for reactivity:
// https://github.com/realm/realm-js/issues/628

export const Fave = id => {
	realm.write(() => {
		realm.create("Fave", {
			id: id,
			faved_on: new Date()
		});
	});
};

export const UnFave = id => {
	realm.write(() => {
		const toDelete = realm.objects("Fave").filtered("id == $0", id);
		realm.delete(toDelete);
	});
};

export const getFaves = () => {
	return realm.objects("Fave");
};

export default realm;
