<table border="1">
<tr>
    <td>
        <h2><?= $model->title; ?></h2>
        <p><?= $model->description; ?></p>
        <p><a href="<?= $model->detailLink; ?>"><?= $model->detailLink; ?></a>
        <h3>Images</h3>
        <div class="row">
            <?php foreach($model->albumImages as $image): ?>
                <div class="col-md-3">
                    <img class="img-responsive" src="<?= $image->getImage()->source; ?>" border="0" />
                </div>
            <?php endforeach; ?>
        </div>
    </td>
</tr>
</table>