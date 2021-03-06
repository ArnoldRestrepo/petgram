import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_PHOTOS = gql`
	query getPhotos($categoryId: ID) {
		photos(categoryId: $categoryId) {
			id
			categoryId
			src
			likes
			userId
			liked
		}
	}
`;

const useGetPhotos = categoryId => {
	const { loading, data, error } = useQuery(GET_PHOTOS, {
		variables: { categoryId }
	});
	return { loading, data, error };
};

export const ListOfPhotoCards = ({ categoryId }) => {
	const { loading, data, error } = useGetPhotos(categoryId);
	if (loading) return <p>Cargando Mascotas...</p>;
	return (
		<section>
			{data.photos.map(photo => (
				<PhotoCard key={photo.id} {...photo} />
			))}
		</section>
	);
};
