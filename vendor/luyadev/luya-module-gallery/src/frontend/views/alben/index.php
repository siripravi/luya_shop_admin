<table>
    <?php foreach($albenData as $item): ?>
    <tr>
        <td><img src="<?= Yii::$app->storage->getImage($item->cover_image_id)->applyFilter('medium-thumbnail')->source; ?>" border="0" /></td>
        <td>
            <h2><?= $item->title; ?></h2>
            <p><?= $item->description; ?></p>
            <p><?= $item->detailLink; ?></p>
        </td>
    </tr>
    <?php endforeach; ?>
</table>